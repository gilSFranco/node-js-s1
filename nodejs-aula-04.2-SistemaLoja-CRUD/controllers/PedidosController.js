import express from "express"
const router = express.Router()
import PedidoService from "../services/PedidoService.js"

router.get("/pedidos", (req, res) => {
    PedidoService.selectAll().then(pedidos => {
        res.render("pedidos", {
            pedidos: pedidos
        })
    })
})

router.post("/pedidos/new", (req, res) => {
    PedidoService.Create(
        req.body.numero,
        req.body.valor
    )

    res.redirect("/pedidos")
})

router.get("/pedidos/delete/:id", (req, res) => {
    const id = req.params.id

    PedidoService.Delete(id)

    res.redirect("/pedidos")
})

export default router