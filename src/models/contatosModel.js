import { Schema, model } from "mongoose";

const contatoSchema = new Schema({
    nome : {type:String, required:true},
    email: {type:String, required:true, unique:true},
    telefone: {type:String, unique:true},
})

export const contato = model("contato", contatoSchema, "contatos")