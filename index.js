import express from "express"
import librosRoutes from "./src/routes/libros.routes.js"
import authRoutes from "./src/routes/authRoute.js"

const app = express()
app.use(express.json())
app.use("/registro", authRoutes)
app.use("/login", authRoutes)
app.use("/libros", librosRoutes)

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000")
})