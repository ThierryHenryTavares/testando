import { connect } from "mongoose";


export const connectDB = () => {
    connect(process.env.DB_URI).then(()=>console.log("Database conectada")).catch((err)=>console.log(err))
}