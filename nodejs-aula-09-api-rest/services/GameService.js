import Game from "../models/Games.js"

class GameService{
    async getAll(){
        try{
            const games = await Game.find()
            return games
        } catch(error){
            console.log(error)
        }
    }

    async Create(title, year, price){
        try{
            const newGame = new Game({
                title,
                year,
                price
            })

            await newGame.save()
        } catch(error){
            console.log(error)
        }
    }

    async Delete(id){
        try{
            await Game.findByIdAndDelete(id)
            console.log(`O game com o id: ${id} foi deletado com sucesso!`)
        } catch(error){
            console.log(error)
        }
    }

    async Update(id, title, year, price){
        try{
            await Game.findByIdAndUpdate(id, {
                title,
                year,
                price
            })

            console.log(`Dados do game com o id: ${id} foi alterado com sucesso!`)
        } catch(error){
            console.log(error)
        }
    }

    async getOne(id){
        try{
            const game = await Game.findOne({ _id: id })
            return game
        } catch(error){
            console.log(error)
        }
    }
}

export default new GameService()