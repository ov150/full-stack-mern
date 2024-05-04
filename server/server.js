import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import dotenv from "dotenv";
import cors from "cors";
import connection from "./utils/database.js"
import authRoutes from "./routes/auth.router.js";
app.use(cors());
dotenv.config();
app.use(express.json());

app.use('/api/v1/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(PORT, ()=>{
    connection();
    console.log(`server is running on port ${PORT}`);
})