import { Router } from "express";
import { findAllContatos, createContatoController, removeContatoById, updateContatoById } from "../controllers/contatosController.js";
const contatosRoute = Router()

contatosRoute.get("/", async (req,res)=>{
    const allContatos = await findAllContatos()
    return res.send(allContatos)
})

contatosRoute.post("/", async (req,res)=>{
    let {nome, email, telefone} = req.body
    await createContatoController(nome, email, telefone)
    return res.send({"msg": `Deu certo, ${email}`})
})

contatosRoute.put("/:id", async (req, res)=>{
    let {id} = req.params
    await updateContatoById(id, req.body)

    return res.send({msg: "atualizado com sucesso"})
})




export {contatosRoute}