import express from "express"
import bcrypt from "bcrypt"
const router = express.Router()
import UserService from "../services/UserService.js"

router.get("/login", (req, res) => {
    res.render("login", {
        loggedOut: true,
        messages: req.flash()
    })
})

router.get("/logout", (req, res) => {
    req.session.user = undefined

    res.redirect("/")
})

router.post("/authenticate", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    UserService.SelectOne(email).then(user => {
        if(user != undefined){
            const correct = bcrypt.compareSync(password, user.password)

            if(correct){
                req.session.user = {
                    id: user._id,
                    email: user.email
                }

                //Criando flash message
                req.flash('success', 'Login efetuado com sucesso.')
                res.redirect("/")
            } else{
                req.flash('danger', 'A senha informada está incorreta. Tente novamente.')
                res.redirect("/login")
            }
        } else{
            req.flash('danger', 'O usuário informado não existe! Verifique os dados digitados.')
            res.redirect("/login")
        }
    })
})

router.get("/cadastro", (req, res) => {
    res.render("cadastro", {
        loggedOut: true,
        messages: req.flash()
    })
})

router.post("/createUser", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    UserService.SelectOne(email).then(user => {
        if(user == undefined){
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            UserService.Create(email, hash)
            res.redirect("/login")
        } else{
            req.flash('danger', 'O usuário já está cadastrado! Faça no login.')
            res.redirect("/cadastro")
        }
    })
})

export default router