Contexto
Una biblioteca necesita un sistema para gestionar sus libros y préstamos. Debes construir una API REST desde cero aplicando todo lo visto en clase.

Modelos

prisma
model Usuario {   id        Int       @id @default(autoincrement())   nombre    String   email     String    @unique   password  String   rol       String    @default("usuario")   prestamos Prestamo[] } model Libro {   id          Int       @id @default(autoincrement())   titulo      String   autor       String   disponible  Boolean   @default(true)   prestamos   Prestamo[] } model Prestamo {   id         Int      @id @default(autoincrement())   fechaInicio DateTime @default(now())   fechaFin   DateTime?   usuario    Usuario  @relation(fields: [usuarioId], references: [id])   usuarioId  Int   libro      Libro    @relation(fields: [libroId], references: [id])   libroId    Int }
Endpoints requeridos


Autenticación — públicos:

POST	/auth/registro	Registrar usuario
POST	/auth/login	Login + devolver JWT
Libros — protegidos con JWT:

GET	/libros	Listar todos los libros	todos
POST	/libros	Agregar libro	solo admin
DELETE	/libros/:id	Eliminar libro	solo admin
Préstamos — protegidos con JWT:

POST	/prestamos	Pedir prestado un libro	todos
PUT	/prestamos/:id/devolver	Devolver libro	todos
GET	/prestamos	Ver todos los préstamos	solo admin
GET	/prestamos/mis-prestamos	Ver los propios	todos
Reglas de negocio
No se puede pedir prestado un libro que no está disponible (disponible: false)
Al pedir prestado, el libro cambia a disponible: false
Al devolver, el libro vuelve a disponible: true y se registra la fechaFin
Un usuario solo puede devolver sus propios préstamos
El admin puede ver todos los préstamos, el usuario solo los suyos
Estructura requerida
Deben seguir la arquitectura por capas vista en clase:

api-examen/ ├── prisma/ │   
            └── schema.prisma 
            ├── src/ 
            │   ├── controllers/ 
            │   ├── routes/ 
            │   ├── middlewares/ 
            │   └── db.js 
            ├── .env 
            └── src/index.js
Criterios de evaluación
Setup correcto — proyecto, Prisma, DB conectada	10
Auth — registro y login funcionando con JWT	20
CRUD de libros con protección por rol	20
Lógica de préstamos — disponibilidad y devolución	30
Middleware de logging y validación	10
Arquitectura por capas respetada	10
Total	100
