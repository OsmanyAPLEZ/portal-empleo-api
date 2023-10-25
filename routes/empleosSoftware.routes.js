import fs from "fs"
import path from "path"
import { Router } from "express";
const router = Router()

const empleoSoftwareFile = path.join(process.cwd(), "data", "empleoSoftware.json")


router.get('/', (req, res)=>{
    const empleoSoftware = ObtenerEmpleoSoftware()
    res.json(empleoSoftware)

});

function ObtenerEmpleoSoftware(){
    const result = fs.readFileSync(empleoSoftwareFile, "utf-8")
    return JSON.parse(result)
}

export default router

