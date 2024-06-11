import express from "express"
import mongoose from "mongoose"
import GameRoutes from "./routes/GameRoutes.js"
import cors from "cors"

const app = express()

//configurações express
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

//endereço do mongodb
mongoose.connect("mongodb://localhost:27017/apinode-games")

app.use("/", GameRoutes)

const port = 4000
app.listen(port, erro => {
    if(erro){
        console.log(erro)
    } else{
        console.log(`Api rodando em http://localhost:${port}`)
    }
})