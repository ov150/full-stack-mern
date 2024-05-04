import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

const signin =  async (req, res, next) => {
    try {
        const { email, password} = req.body;
        const userExist = await User.findOne({email:email});
        if(!userExist){
            return res.status(400).json({
                success:true,
                message: "user not found",
            })
        }
        if(!password){
            return res.status(400).json({
                success:false,
                message:"please enter password",
            })
        }
        // console.log(password);
        // console.log(userExist.password);  
        if(password !== userExist.password){
            return res.json({
                message:"incorrect password"
            })
        }      
        return res.status(200).json({
            message:"user login successfully"
        })
    } catch (error) {
        console.log(error);
    }

}

export {
    signup,
    signin
}