//Importando o express
const express = require("express")

//Iniciando o express dentro da variavel app
const app = express()

app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro.")
    } else{
        console.log("Servidor iniciado com sucesso!")
    }
})