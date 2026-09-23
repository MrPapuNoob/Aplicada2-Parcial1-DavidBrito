import "dotenv/config"
import express from "express"
import librosRoutes from "./routes/libros.routes.js"
import authRoutes from "./routes/authRoute.js"
import prestamosRouter from "./routes/prestamos.routes.js"

const app = express()
app.use(express.json())
app.use("/auth/registro", authRoutes)
app.use("/auth/login", authRoutes)
app.use("/libros", librosRoutes)
app.use("/prestamos", prestamosRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor escuchando en el puerto " + (process.env.PORT || 3000))
})