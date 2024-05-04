import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import dotenv from "dotenv";
import cors from "cors";


app.use(cors());
dotenv.config();

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id:1,
            title:'a joke number 1',
            content:'a joke with id number 1'
        },
        {
            id:2,
            title:'a joke number 2',
            content:'a joke with id number 2'
        },
        {
            id:3,
            title:'a joke number 3',
            content:'a joke with id number 3'
        },
        {
            id:4,
            title:'a joke number 4',
            content:'a joke with id number 4'
        },
        {
            id:5,
            title:'a joke number 5',
            content:'a joke with id number 5'
        },
    ];
    res.send(jokes)
})


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})