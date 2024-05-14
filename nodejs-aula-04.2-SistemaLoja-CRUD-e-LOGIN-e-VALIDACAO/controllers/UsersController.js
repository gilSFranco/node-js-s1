import express from "express"
import bcrypt from "bcrypt"
const router = express.Router()
import UserService from "../services/UserService.js"

router.get("/login", (req, res) => {
    res.render("login", {
        loggedOut: true
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

                res.redirect("/")
            } else{
                res.send(`Senha inválida! <br> <a href='/login'>Tentar novamente.</a>`)
            }
        } else{
            res.send(`Usuário não existe. <br> <a href='/login'>Tentar novamente.</a>`)
        }
    })
})

router.get("/cadastro", (req, res) => {
    res.render("cadastro", {
        loggedOut: true
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
            res.send(`Usuário já cadastrado! <br> <a href='/cadastro'>Tentar novamente.</a>`)
        }
    })
})

export default router