import { Router } from "express"
import { getLibros,createLibro  } from "../controllers/libros.controller.js"

const router = Router()

router.get("/libros", getLibros)
router.post("/libros", createLibro)
router.delete("/libros/:id", deleteLibro)

export default router