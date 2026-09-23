import { Router } from "express"
import { registro, login } from "../controllers/auth.controller.js"

const router = Router()

router.post("/auth/registro", registro)
router.post("/auth/login", login)

export default router