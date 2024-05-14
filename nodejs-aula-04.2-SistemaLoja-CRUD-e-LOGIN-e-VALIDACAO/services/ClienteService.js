import mongoose from "mongoose"
import cliente from "../models/Cliente.js"

const Cliente = mongoose.model("Cliente", cliente)

class ClienteService {
    //Método para SELECIONAR TODOS os Clientes no banco
    selectAll(){
        const clientes = Cliente.find()
        return clientes
    }

    //Método para CADASTRAR um cliente
    Create(nome, cpf, endereco){
        const novoCliente = new Cliente({
            nome: nome,
            cpf: cpf,
            endereco: endereco
        })
        novoCliente.save()
    }

    //Método para EXCLUIR um cliente
    Delete(id){
        Cliente.findByIdAndDelete(id).then(() => {
            console.log(`Cliente com a id: ${id} foi deletado com sucesso.`)
        }).catch(erro => {
            console.log(erro)
        })
    }

    //Método para SELECIONAR um cliente ÚNICO
    selectOne(id){
        const cliente = Cliente.findOne({_id: id})
        return cliente
    }

    Update(id, nome, cpf, endereco){
        Cliente.findByIdAndUpdate(id, {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        }).then(()=>{
            console.log(`Dados do cliente com o id: ${id} alterados com sucesso!`)
        }).catch(erro => {
            console.log(erro)
        })
    }
}

export default new ClienteService()