import express from "express"
const router = express.Router()
import PedidoService from "../services/PedidoService.js"
import Auth from "../middleware/Auth.js"

router.get("/pedidos", Auth, (req, res) => {
    PedidoService.selectAll().then(pedidos => {
        res.render("pedidos", {
            pedidos: pedidos
        })
    })
})

router.post("/pedidos/new", Auth, (req, res) => {
    PedidoService.Create(
        req.body.numero,
        req.body.valor
    )

    res.redirect("/pedidos")
})

router.get("/pedidos/delete/:id", Auth, (req, res) => {
    const id = req.params.id

    PedidoService.Delete(id)

    res.redirect("/pedidos")
})

export default router