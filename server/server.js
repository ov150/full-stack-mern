import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import dotenv from "dotenv";
import cors from "cors";
import connection from "./utils/database.js"


app.use(cors());
dotenv.config();

app.listen(PORT, ()=>{
    connection();
    console.log(`server is running on port ${PORT}`);
})