import fs from "fs"
import path from "path"
import { Router } from "express";
const router = Router()

const empleoElectricaFile = path.join(process.cwd(), "data", "empleoElectrica.json")


router.get('/', (req, res)=>{
    const empleoElectrica = ObtenerEmpleoElectrica()
    res.json(empleoElectrica)

});

function ObtenerEmpleoElectrica(){
    const result = fs.readFileSync(empleoElectricaFile, "utf-8")
    return JSON.parse(result)
}

export default router

