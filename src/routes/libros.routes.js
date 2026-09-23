import { Router } from "express"
import { getLibros,createLibro,deleteLibro  } from "../controllers/libros.controller.js"

const router = Router()

router.get("/", getLibros)
router.delete("/:id", deleteLibro)

export default router