import mongoose from "mongoose"
import produto from "../models/Produto.js"

const Produto = mongoose.model("Produto", produto)

class ProdutoService {
    selectAll(){
        const produtos = Produto.find()
        return produtos
    }

    Create(nome, preco, categoria){
        const novoProduto = new Produto({
            nome: nome,
            preco: preco,
            categoria: categoria
        })
        novoProduto.save()
    }

    Delete(id){
        Produto.findByIdAndDelete(id).then(()=>{
            console.log(`O produto com o id: ${id} foi deletado com sucesso.`)
        }).catch(erro => {
            console.log(erro)
        })
    }
}

export default new ProdutoService()