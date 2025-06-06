import express from "express"
import {config as dotenvConfig} from "dotenv"
import cors from "cors"
import { contatosRoute } from "./src/routes/contatosRoute.js"
import { connectDB } from "./src/database/database.js"

dotenvConfig()
const app = express()
app.use(express.json())
app.use(cors())

connectDB()
app.use("/contatos", contatosRoute)

app.listen(process.env.PORT, ()=>console.log(`Iniciado na porta ${process.env.PORT}`))