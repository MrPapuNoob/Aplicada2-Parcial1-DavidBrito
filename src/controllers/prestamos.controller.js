import {prisma} from "../db.js"

export const postPrestamo = async (req, res) => {
  try {
    const { usuarioId, libroId } = req.body
    const where = req.libro.disponible === "true" ? { id } : { id, usuarioId: req.usuario.id }
    const prestamo = await prisma.prestamo.create({
      data: {
        usuarioId,
        libroId
      }
    })
    res.status(201).json(prestamo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al crear el prestamo" })
  }
}

export const getPrestamos = async (req, res) => {
  try {
    const where = req.usuario.rol === "admin" ? { id } : { id, usuarioId: req.usuario.id }
    await prisma.prestamo.findMany({
      where: { where }
    })
    res.status(200).json({ message: "Prestamos obtenidos correctamente" })
  } catch (err) { next(err) }
   
}
export const getPrestamoPropios = async (req, res) => {
  try {
    const prestamos = await prisma.prestamo.findMany({
      where: { usuarioId: req.usuario.id }
    })
    res.json(prestamos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al obtener los prestamos" })
  }
}

export const putPrestamo = async (req, res) => {
  try {
    const { id } = req.params
    const { userId, libroId } = req.body
    const prestamo = await prisma.prestamo.update({
      where: { id },
      data: { userId, libroId }
    })
    res.json(prestamo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al actualizar el prestamo" })
  }
}

export const createPrestamo = async (req, res) => {
  try {
    const { userId, libroId } = req.body
    const prestamo = await prisma.prestamo.create({
      data: {
        userId,
        libroId
      }
    })
    res.json(prestamo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al crear el prestamo" })
  }
}

export const deletePrestamo = async (req, res) => {
  try {
    const { id } = req.params
    const prestamo = await prisma.prestamo.delete({
      where: {
        id
      }
    })
    res.json(prestamo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al eliminar el prestamo" })
  }
}
