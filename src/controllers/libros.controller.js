import { prisma } from "../db.js"

export const getLibros = async (req, res, next) => {
  try {
    const libros = await prisma.libro.findMany()
    res.json(libros)
  } catch (err) {
    next(err)
  }
}

export const createLibro = async (req, res, next) => {
  try {
    const { titulo, autor } = req.body
    const libro = await prisma.libro.create({
      data: { titulo, autor }
    })
    res.status(201).json(libro)
  } catch (err) {
    next(err)
  }
}

export const deleteLibro = async (req, res, next) => {
  try {
    const { id } = req.params
    await prisma.libro.delete({
      where: { id: Number(id) }
    })
    res.json({ message: "Libro eliminado" })
  } catch (err) {
    next(err)
  }
}
