import ServiceCarro from "../service/carro.js"

class ControllerCarro {

    // Recebimento e a Saida das inf
   async Buscar(req, res) {
        try {
            const carros = await ServiceCarro.Buscar()
            res.send({ mensagem: carros })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = ServiceCarro.Detalhe(id)

            res.send({ mensagem: carro })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Criar(req, res) {
        try {
            const { id, marca, ano } = req.body

            ServiceCarro.Criar(id, marca, ano)

            res.send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Alterar(req, res) {
        try {
            ServiceCarro.Alterar
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Deletar(req, res) {
        try {
            const identificador = req.body.id

            ServiceCarro.Deletar(identificador)

            res.send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}
export default new ControllerCarro()