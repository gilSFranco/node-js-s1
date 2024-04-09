import express from "express"
const router = express.Router()
import ClienteService from "../services/ClienteService.js"

router.get("/clientes", (req, res) => {
    ClienteService.selectAll().then(clientes => {
        res.render("clientes", {
            clientes: clientes
        })
    })
})

router.post("/clientes/new", (req, res) => {
    ClienteService.Create(
        req.body.nome,
        req.body.cpf,
        req.body.endereco
    )

    res.redirect("/clientes")
})

router.get("/clientes/delete/:id", (req, res) => {
    const id = req.params.id
    ClienteService.Delete(id)

    res.redirect("/clientes")
})

router.get("/clientes/edit/:id", (req, res) => {
    const id = req.params.id
    ClienteService.selectOne(id).then(cliente => {
        res.render("clienteEdit", {
            cliente: cliente
        })
    }).catch(erro => {
        console.log(`Erro: ${erro}`)
    })
})

router.post("/clientes/update/:id", (req, res) => {
    ClienteService.Update(
        req.body.id,
        req.body.nome,
        req.body.cpf,
        req.body.endereco
    )

    res.redirect("/clientes")
})

export default router