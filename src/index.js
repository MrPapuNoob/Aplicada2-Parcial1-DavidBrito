import "dotenv/config"
import express from "express"
import librosRoutes from "./src/routes/libros.routes.js"
import authRoutes from "./src/routes/authRoute.js"

const app = express()
app.use(express.json())
app.use("/auth/registro", authRoutes)
app.use("/auth/login", authRoutes)
app.use("/libros", librosRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor escuchando en el puerto " + (process.env.PORT || 3000))
})