import express from "express"
const router = express.Router()
import UserService from "../services/UserService.js"

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/cadastro", (req, res) => {
    res.render("cadastro")
})

router.post("/createUser", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    UserService.Create(email, password)

    res.redirect("/login")
})

export default router