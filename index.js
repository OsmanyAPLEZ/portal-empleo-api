import express from 'express';
import { config } from 'dotenv';
config()

import empleosSoftwareRoutes from './routes/empleosSoftware.routes.js';
import empleosTurismoRoutes from './routes/empleosTurismo.routes.js';
import empleosMercadeoRoutes from './routes/empleosMercadeo.routes.js';
import empleosElectricaRoutes from './routes/empleoElectrica.routes.js';

const PORT = process.env.PORT || 3000;


const app =  express()
app.use(express.json())

//Obtener Empleos de Software
app.use("/empleoSoftware", empleosSoftwareRoutes)

//Obtener Empleos de Turismo
app.use("/empleosTurismo", empleosTurismoRoutes)

//Obtener Empleos de Turismo
app.use("/empleosMercadeo", empleosMercadeoRoutes)

//Obtener Empleos de Turismo
app.use("/empleosElectrica", empleosElectricaRoutes)

app.listen(3000, ()=>{
    console.log("Server is running on  http://localhost:" + PORT)
})