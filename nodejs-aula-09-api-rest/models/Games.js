import mongoose from "mongoose"

const game = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number
})

const Game = mongoose.model("Game", game)

export default Game