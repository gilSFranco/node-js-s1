//Importando o express
const express = require("express")

//Iniciando o express dentro da variavel app
const app = express()

app.set("view engine","ejs")

//Criando a primeira rota do site (ROTA PRINCIPAL)
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/Perfil/:nome", (req, res) => { //PARAMETRO OBRIGATORIO
    // // res.send(req.params.nome) //Coletando o parametro
    // let nome = req.params.nome
    // res.send(nome)
    
    res.render("perfil")
})

app.get("/Videos", (req, res) => {
    res.render("video")
})

app.listen(8080, erro => {
    if(erro){
        console.log("Ocorreu um erro.")
    } else{
        console.log("Servidor iniciado com sucesso.")
    }
})