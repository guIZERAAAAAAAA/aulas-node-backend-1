 import RepositoryCarro from '../repository/carro.js'

class ServiceCarro {

    // Core- Regra de Negocio
   async Buscar() {
        return RepositoryCarro.Find()
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    Detalhe(id) {
        // if (!id) {
        //     throw Error("FAvor informar id ")
        // }

        // const carro = RepositoryCarro.find(it => it.id === id)

        // if (!carro) {
        //     throw new Error(`ID ${id} do carro não encontrado`)          // nao necesasrio colocar o id dentro do nao encontrado 

        // }

        // return carro
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    //FUnção (parametros,parametros,parametros.. infinito parametroso // o ideal é de 5 a 4)
    Criar(id, marca, ano) {
    //     if (!id || !marca || !ano) {
    //         throw new Error("Favor informar todos os dados")
    //         return
    //     }
    //     RepositoryCarro.push({ id, marca, ano })

    //     return { id, marca, ano }
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////

    Alterar() {

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    Deletar(id) {

        // if (!id) {
        //     throw new Error("Favor informar todos os dados")
        // }

        // carros.splice(it => it.id === id, 1)

        // return id
    }
    }

export default new ServiceCarro()