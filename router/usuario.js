import express from "express"
import ControllerUsuario from "../controller/usuario.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.post("/login",  ControllerUsuario.Login)
router.get("/buscar", authMiddleware, ControllerUsuario.Buscar)
router.get("/detalhe/:id", authMiddleware, ControllerUsuario.Detalhe)
router.post("/criar", ControllerUsuario.Criar)
router.put("/alterar/:id", authMiddleware, ControllerUsuario.Alterar)
router.delete("/deletar/:id", authMiddleware ,ControllerUsuario.Deletar)

export default router