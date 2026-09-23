import {Router} from "express"
import {getPrestamos, createPrestamo, deletePrestamo} from "../controllers/prestamos.controller.js"

const router = Router()

router.get("/", getPrestamos)
router.post("/", createPrestamo)
router.delete("/:id", deletePrestamo)

export default router