import express from "express"
const router = express.Router()
import ClienteService from "../services/ClienteService.js"

router.get("/clientes",function(req,res){
    res.render("clientes")
})

export default router