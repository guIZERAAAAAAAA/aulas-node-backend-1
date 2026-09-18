import usuario from '../model/usuario.js';

// INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryUsuario {

  async Find() {
    const usuarios = await usuario.findAll()

    return usuarios
  }

  async findByid(id) {
    const usuarioDetalhes = await usuario.findByPk(id)

    return usuarioDetalhes
  }

  async Create(email,senha) {

    const usuarioCreate = await usuario.create({ email, senha })

    return usuarioCreate
  }

  async Update(id, email, senha) {

    const usuarioAlterado = await usuario.findByPk(id)

    if (!usuarioAlterado) {
      throw new Error("Usuario não encontrado ")
    }

    usuarioAlterado.email = email || usuarioAlterado.email
    usuarioAlterado.senha = senha || usuarioAlterado.senha

await usuarioAlterado.save()

  }

  async Delete(id) {

    const usuarioDeletar = await usuario.findByPk(id)

    if (!usuarioDeletar) {
      throw new Error("Carro não encontrado ")
    }

    await usuarioDeletar.destroy()

    return usuarioDeletar


  }

  async FindByEmail(email) {
    return usuario.findOne({where: {email }})
  }
}

export default new RepositoryUsuario()