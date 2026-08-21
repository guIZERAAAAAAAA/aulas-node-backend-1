import express from "express"
import carros from "../repository/carro.js"
const router = express.Router()
import ControllerCarro from "../controller/carro.js"

// Buscar todos
router.get("/buscar", ControllerCarro.Buscar)
// Buscar Um
router.get("/detalhe/:id", ControllerCarro.Detalhe)
// Criar
router.post("/criar",ControllerCarro.Criar )
// Alterar
router.post("/alterar", ControllerCarro.Alterar)
// Deletar
router.post("/deletar",ControllerCarro.Deletar)

export default router