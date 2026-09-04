import carro from '../model/carro.js';

// INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryCarro {

  async Find() {
    const carros = await carro.findAll()

    return carros
  }

  async findByid(id) {
    const carroDetalhes = await carro.findByPk(id)

    return carroDetalhes
  }

  async Create() {

    const carroCreate = await carro.create({ marca, ano })

    return carroCreate
  }

  async Update(id, marca, ano) {

    const carroAlterado = await carro.findByPk(id)

    if (!carroAlterado) {
      throw new Error("Carro não encontrado ")
    }

    carroAlterado.marca = marca || carroAlterado.marca
    carroAlterado.ano = ano || carroAlterado.ano

await carroAlterado.save()

  }

  async Delete(id) {

    const carroDeletar = await carro.findByPk(id)

    if (!carroDeletar) {
      throw new Error("Carro não encontrado ")
    }

    await carroDeletar.destroy()

    return carroDeletar


  }
}

export default new RepositoryCarro()