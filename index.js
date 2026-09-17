import express from 'express'
import usuario from './router/usuario.js'
import database from './config/database.js'
import carro from './router/carro.js'


const app = express()
app.use(express.json())

app.use("/api/v1/carro", carro)
app.use("/api/v1/usuario", usuario)

database.db
    .sync({ force: false })                             //  se for true deleta tudo , e o false salva  
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })