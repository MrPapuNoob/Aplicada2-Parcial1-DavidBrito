import { prisma } from "../db.js"

export const createPrestamo = async (req, res, next) => {
  try {
    const { libroId } = req.body
    const libro = await prisma.libro.findUnique({ where: { id: Number(libroId) } })
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" })
    if (!libro.disponible) return res.status(400).json({ error: "Libro no disponible" })

    await prisma.libro.update({
      where: { id: libro.id },
      data: { disponible: false }
    })

    const prestamo = await prisma.prestamo.create({
      data: {
        libroId: libro.id,
        usuarioId: req.usuario.id
      }
    })
    res.status(201).json(prestamo)
  } catch (err) {
    next(err)
  }
}

export const devolverPrestamo = async (req, res, next) => {
  try {
    const { id } = req.params
    const prestamo = await prisma.prestamo.findUnique({ where: { id: Number(id) } })
    if (!prestamo) return res.status(404).json({ error: "Prestamo no encontrado" })
    if (prestamo.usuarioId !== req.usuario.id) {
      return res.status(403).json({ error: "No autorizado" })
    }
    if (prestamo.fechaFin) {
      return res.status(400).json({ error: "El libro ya fue devuelto" })
    }

    const prestamoActualizado = await prisma.prestamo.update({
      where: { id: prestamo.id },
      data: { fechaFin: new Date() }
    })

    await prisma.libro.update({
      where: { id: prestamo.libroId },
      data: { disponible: true }
    })

    res.json(prestamoActualizado)
  } catch (err) {
    next(err)
  }
}

export const getPrestamos = async (req, res, next) => {
  try {
    const prestamos = await prisma.prestamo.findMany({
      include: { libro: true, usuario: true }
    })
    res.json(prestamos)
  } catch (err) {
    next(err)
  }
}

export const getPrestamosPropios = async (req, res, next) => {
  try {
    const prestamos = await prisma.prestamo.findMany({
      where: { usuarioId: req.usuario.id },
      include: { libro: true }
    })
    res.json(prestamos)
  } catch (err) {
    next(err)
  }
}
