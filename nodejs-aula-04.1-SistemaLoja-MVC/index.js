// Importando o Express
import express from "express"

// Iniciando o Express 
const app = express()

//Importando a ODM Mongoose
import mongoose from "mongoose"

//Importando os Controllers (onde estão as rotas)
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"
import ClientesController from "./controllers/ClientesController.js"

//Iniciando conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://localhost:27017/loja")

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')

// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

//Definindo o uso das rotas dos Controllers
app.use("/", PedidosController)
app.use("/", ProdutosController)
app.use("/", ClientesController)

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})