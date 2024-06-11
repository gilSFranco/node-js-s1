import GameService from "../services/GameService.js"
import { ObjectId } from "mongodb"

const getAllGames = async (req, res) => {
    try{
        const games = await GameService.getAll()
        res.status(200).json({ games: games })
    } catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor." })
    }
}

const createGame = async (req, res) => {
    try{
        const { title, year, price } = req.body
        await GameService.Create(title, year, price)
        res.sendStatus(201)
    } catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor." })
    }
}

const deleteGame = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            await GameService.Delete(id)
            res.sendStatus(204)
        } else{
            res.sendStatus(400)
        }
    } catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor." })
    }
}

const updateGame = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const { title, year, price } = req.body
            await GameService.Update(id, title, year, price)
            res.sendStatus(200)
        } else{
            res.sendStatus(400)
        }
    } catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor." })
    }
}

const getOneGame = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const game = await GameService.getOne(id)
            
            if(!game){
                res.sendStatus(404)
            } else{
                res.status(200).json({ game })
            }
        } else{
            res.sendStatus(400)
        }
    } catch(error){
        console.log(error)
        res.sendStatus(500).json({ error: "Erro interno do servidor." })
    }
}

export default { getAllGames, createGame, deleteGame, updateGame, getOneGame }