import express from "express"
import GameController from "../controllers/GameController.js"
const GameRoutes = express.Router()

GameRoutes.get("/games", GameController.getAllGames)

GameRoutes.post("/game", GameController.createGame)

GameRoutes.delete("/game/:id", GameController.deleteGame)

GameRoutes.put("/game/:id", GameController.updateGame)

GameRoutes.get("/game/:id", GameController.getOneGame)

export default GameRoutes