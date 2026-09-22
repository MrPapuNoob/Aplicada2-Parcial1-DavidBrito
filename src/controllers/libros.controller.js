import {prisma} from "../db.js"


export const getLibros = async (req, res, next) => {
  try {
    const libros = await prisma.libro.findMany()
    res.json(libros)
  } catch (err) { next(err) }
}

export const createLibro = async (req, res, next) => {
  try {
    const { titulo, autor } = req.body
    const libro = await prisma.libro.create({
      data: { titulo, autor }
    })
    res.status(201).json(libro)
  } catch (err) { next(err) }
}

export const deleteLibro = async (req, res, next) => {
  try {
    const { id } = req.params
    const where = req.usuario.rol === "admin" ? { id } : { id, usuarioId: req.usuario.id }
    await prisma.libro.delete({
      where: { where }
    })
    res.status(200).json({ message: "Libro eliminado" })
  } catch (err) { next(err) }
}

