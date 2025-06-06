import { contato } from "../models/contatosModel.js";

export const createContatoController = (nome, email, telefone) => contato.create({nome,email,telefone})
export const updateContatoById = (_id, newData) => contato.updateOne({_id}, newData)
export const removeContatoById = (_id) => contato.findByIdAndDelete(_id)
export const findAllContatos   = () => contato.find()
