import express from "express"
import multer from "multer"
import mongoose from "mongoose"

import GaleriaService from "./services/GaleriaService.js"

const app = express()
const upload = multer({dest: "public/uploads/"})

app.use(express.static("public"))
app.set("view engine", "ejs")

mongoose.connect("mongodb://localhost:27017/galeria")

app.get("/", (req, res) => {
    GaleriaService.GetAll().then(galeria => {
        res.render("index", {
            galeria: galeria
        })
    }).catch(erro => {
        console.log(erro)
    })
})

app.post("/upload", upload.single("file"), (req, res) => {
    const file = req.file.filename
    GaleriaService.Create(file)

    res.redirect("/")
})

const port = 8080
app.listen(port, erro => {
    if(erro){
        console.log(erro)
    } else{
        console.log(`Servidor iniciado com sucesso [porta = ${port}].`)
    }
})