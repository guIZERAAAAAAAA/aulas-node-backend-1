import { Sequelize } from "sequelize"

class Database {
    constructor ( ) {
    this .Init()   

    }

    Init() {
    this.db = new Sequelize({
        database:"exemplo",
        host :"localhost",
        username:"root",
        dialect:"mysql",
        password:"",
    })

    }
}

export default new Database()

