import { Router } from "express"
import { getLibros, createLibro, deleteLibro } from "../controllers/libros.controller.js"
import { verificarToken, soloAdmin } from "../middlewares/auth.middleware.js"
import { validarLibro, validarId } from "../middlewares/validacion.middleware.js"

const router = Router()

router.get("/", verificarToken, getLibros)
router.post("/", verificarToken, soloAdmin, validarLibro, createLibro)
router.delete("/:id", verificarToken, soloAdmin, validarId, deleteLibro)

export default router
