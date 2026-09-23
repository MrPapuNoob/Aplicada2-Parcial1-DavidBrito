import { Router } from "express"
import { registro, login } from "../controllers/auth.controller.js"

const router = Router()

router.post("/", registro)
router.post("/", login)

export default router