import fs from "fs"
import path from "path"
import { Router } from "express";
const router = Router()

const empleoMercadeoFile = path.join(process.cwd(), "data", "empleoMercadeo.json")


router.get('/', (req, res)=>{
    const empleoMercadeo = ObtenerEmpleoMercadeo()
    res.json(empleoMercadeo)

});

function ObtenerEmpleoMercadeo(){
    const result = fs.readFileSync(empleoMercadeoFile, "utf-8")
    return JSON.parse(result)
}

export default router