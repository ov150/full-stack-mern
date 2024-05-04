import mongoose from "mongoose";

const connection = async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`database connected successfully`);
    } catch (error) {
        console.log(`database connection error ${error}`);
    }
}

export default connection;