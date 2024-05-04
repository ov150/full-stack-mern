import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js";

const signup = async (req, res, next) =>{
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password || username === "" || email === "" || password === ""){
            next(errorHandler(400, 'All fields are required'));
        }
        const newUser = new User({
            username,
            email,
            password
        })
        await newUser.save();
        return res.json({
            message:"user created successfully",
        })
    } catch (error) {
        next(error);
    }
}

export {
    signup
}