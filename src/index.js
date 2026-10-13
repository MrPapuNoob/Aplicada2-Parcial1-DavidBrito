import "dotenv/config"
import express from "express"
import { logger } from "./middlewares/logger.middleware.js"
import librosRoutes from "./routes/libros.routes.js"
import authRoutes from "./routes/authRoute.js"
import prestamosRouter from "./routes/prestamos.routes.js"

const app = express()
app.use(logger)
app.use(express.json())
app.use("/auth", authRoutes)
app.use("/libros", librosRoutes)
app.use("/prestamos", prestamosRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor escuchando en el puerto " + (process.env.PORT || 3000))
})
