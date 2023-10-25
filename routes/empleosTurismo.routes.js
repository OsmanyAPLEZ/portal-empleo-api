import fs from "fs"
import path from "path"
import { Router } from "express";
const router = Router()

//Ruta raiz para obtener el archivos JSON
const empleoTurismoFile = path.join(process.cwd(), "data", "empleoTurismo.json")

//Ruta Get para obtener todos los empleos turismo.
router.get('/', (req, res)=>{
    const empleoTurismo = ObtenerEmpleoTurismo()
    res.json(empleoTurismo)

})

function ObtenerEmpleoTurismo(){
    const result = fs.readFileSync(empleoTurismoFile, "utf-8")
    return JSON.parse(result)
}

export default router

