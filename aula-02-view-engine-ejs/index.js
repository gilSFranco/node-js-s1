//Importando o express
const express = require("express")

//Iniciando o express dentro da variavel app
const app = express()

app.set("view engine", "ejs")

//Criando a primeira rota do site (ROTA PRINCIPAL)
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/Perfil/:nome?", (req, res) => { //PARAMETRO OBRIGATORIO
    let nome = req.params.nome

    if(nome){
        res.send(`<h2>Olá, ${nome}!<br>Seja bem-vindo ao seu perfil!</h2>`)
    } else{
        res.render("perfil")
    }
})

app.get("/Videos/:playlist/:video", (req, res) => {
    let playlist = req.params.playlist
    let video = req.params.video

    res.render("video", {
        playlist: playlist,
        video: video
    })
})

app.get("/Produtos/:produto?", (req, res) => {
    const produtos = [
        {nome: "Memoria RAM", preco: 4000, descricao: "Memoria RAM da intel"},
        {nome: "CPU", preco: 6000, descricao: "CPU velha com gabiru drento."},
        {nome: "Ladrilho", preco: 50, descricao: "Roubei do chao do banheiro da minha vo."},
        {nome: "Vidro", preco: 5, descricao: "Quebrei o vidro do carro do meu tio e peguei os estilhaços."}
    ]
    
    let produto = req.params.produto

    res.render("produtos", {
        produtos: produtos,
        produto: produto
    })
})

app.get("/Pedidos", (req, res) => {
    const pedidos = [
        {produto: "Celular", preco: 3000},
        {produto: "Computador", preco: 4000},
        {produto: "Tablet", preco: 2000},
        {produto: "Notebook", preco: 3800}
    ]

    res.render("pedidos", {
        pedidos: pedidos
    })
})

app.listen(8080, erro => {
    if (erro) {
        console.log("Ocorreu um erro.")
    } else {
        console.log("Servidor iniciado com sucesso.")
    }
})