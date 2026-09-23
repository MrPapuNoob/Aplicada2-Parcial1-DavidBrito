import {router} from "express"
import {getPrestamos, createPrestamo, deletePrestamo} from "../controllers/prestamos.controller.js"

const router = router()

router.get("/prestamos", getPrestamos)
router.post("/prestamos", createPrestamo)
router.delete("/prestamos/:id", deletePrestamo)

export default router