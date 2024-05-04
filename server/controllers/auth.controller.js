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
        if(!username || !password || username === "" || password === ""){
            next(errorHandler(400, 'all fields are required'));
        }
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404, 'user not found'));
        }

        return res.json({
            message:"user login",
            validUser
        })
        // if(password !== validUser.password){
        //     return next(errorHandler(400, 'invalid password'))
        // }

        // const token = jwt.sign(
        //     {id: validUser._id}, 
        //     process.env.JWT_SECRET,
        
        // )

        // const { password: pass, ...rest} = validUser._doc;

        // res.status(200).cockie('access_token', token, {
        //     httpOnly:true
        // }).json(validUser)
    } catch (error) {
        next(error)
    }
}

export {
    signup,
    signin
}