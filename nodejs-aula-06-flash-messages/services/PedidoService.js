import mongoose from "mongoose"
import pedido from "../models/Pedido.js"

const Pedido = mongoose.model("Pedido", pedido)

class PedidoService {
    selectAll(){
        const pedidos = Pedido.find()
        return pedidos
    }

    Create(numero, valor){
        const novoPedido = new Pedido({
            numero: numero,
            valor: valor
        })

        novoPedido.save()
    }

    Delete(id){
        Pedido.findByIdAndDelete(id).then(()=>{
            console.log(`O pedido com o id: ${id} foi deletado com sucesso`)
        }).catch(erro => {
            console.log(erro)
        })
    }
}

export default new PedidoService()