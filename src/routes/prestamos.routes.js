import {Router} from "express"
import {getPrestamos, createPrestamo, deletePrestamo} from "../controllers/prestamos.controller.js"

const router = Router()

router.get("/prestamos", getPrestamos)
router.post("/prestamos", createPrestamo)
router.delete("/prestamos/:id", deletePrestamo)

export default router