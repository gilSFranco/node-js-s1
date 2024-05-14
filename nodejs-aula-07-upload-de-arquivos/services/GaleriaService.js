import mongoose from "mongoose"
import galeria from "../models/Galeria.js"

const Galeria = mongoose.model("Galeria", galeria)

class GaleriaService{
    Create(file){
        const newPicture = new Galeria({
            file: file
        })

        newPicture.save()
    }

    GetAll(){
        const galeria = Galeria.find()
        return galeria
    }
}

export default new GaleriaService()