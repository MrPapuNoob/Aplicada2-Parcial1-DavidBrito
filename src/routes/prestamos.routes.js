import { Router } from "express"
import {
  createPrestamo,
  devolverPrestamo,
  getPrestamos,
  getPrestamosPropios
} from "../controllers/prestamos.controller.js"
import { verificarToken, soloAdmin } from "../middlewares/auth.middleware.js"
import { validarPrestamo, validarId } from "../middlewares/validacion.middleware.js"

const router = Router()

router.get("/", verificarToken, soloAdmin, getPrestamos)
router.get("/mis-prestamos", verificarToken, getPrestamosPropios)
router.post("/", verificarToken, validarPrestamo, createPrestamo)
router.put("/:id/devolver", verificarToken, validarId, devolverPrestamo)

export default router
