import express from "express";
import cors from 'cors'
// conexion
import db from "./database/db.js";
import blogRoutes from './routes/routes.js'

const app = express()

/* */
app.use(cors())
app.use(express.json())
app.use('/blogs',blogRoutes)

try {
    await db.authenticate()
    console.log("Conexión exitosa a la base de datos")
} catch (error) {
    console.log("Error al conectarse a la base de datos")
}
/* app.get('/',(req,res)=>{
    res.send('holla mundo')
})  */
app.listen(8000,()=>{
    console.log("hola")
})