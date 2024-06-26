import express from "express"
const router = express.Router()
import ProdutoService from "../services/ProdutoService.js"
import Auth from "../middleware/Auth.js"

router.get("/produtos", Auth, (req,res) => {
    ProdutoService.selectAll().then(produtos => {
        res.render("produtos", {
            produtos: produtos
        })
    })
})

router.post("/produtos/new", Auth, (req, res) => {
    ProdutoService.Create(
        req.body.nome,
        req.body.preco,
        req.body.categoria
    )

    res.redirect("/produtos")
})

router.get("/produtos/delete/:id", (req, res) => {
    const id = req.params.id

    ProdutoService.Delete(id)

    res.redirect("/produtos")
})

export default router