import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import RepositoryUsuario from '../repository/usuario.js'

const segredo = " meusegredo "

class ServiceUsuario {

    // Core- Regra de Negocio
    async Buscar() {
        return RepositoryUsuario.Find()
    }

    Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const usuario = RepositoryUsuario.Find(id)

        if (!usuario) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }

        return usuario
    }
    // Função(parametros, parametros, parametros)
    async Criar(email, senha) {
        if (!email || !senha) {
            throw new Error("Favor informar todos os dados")
        }
        const usuario = await RepositoryUsuario.Create(email, senha)

        return usuario
    }

    async Alterar(id, email, senha) {
        if (!id || !email || !senha) {
            throw new Error("Favor informar os dados");
        }
        const usuarioAlterado = await RepositoryUsuario.Update(id, email, senha)

        return usuarioAlterado
    }
async Deletar(id) {
    if (!id) {
        throw new Error("Favor informar o ID")
    }

    const usuario = await RepositoryUsuario.Delete(id)

    return id
}

async Login (email, senha ){
    if(!email||!senha){
        throw new Error("Email ou senhas invalidos ")
    }

    const usuario = await RepositoryUsuario.findByid(email)

    if(!usuario) {
        throw new Error (" Email ou senha invalido ")
    }

    if(
        !(await bcrypt.compare(String(senha),usuario.senha))
    ){
        throw new Error (" Email ou senha invalido ")
    }

    return jwt.sign({
        id: usuario.id,email},
        segredo,
        { expiresIn: 60 * 60 }
    )
}

}

export default new ServiceUsuario()