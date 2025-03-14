//db ka operation, koi user ko register kar raha hai toh

import { User } from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res) =>{
    try{
        const {fullName, email, password} = req.body;   // password -> We use hashing algo or something to make it encrypted. We use bcrypt library to help us hash this password.
        if(!fullName || !email || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required."
            })
        }

        //finding user ki with this email id se register toh ni
        const user = await User.findOne({email:email});
        if(user){
            return res.status(403).json({
                success:false,
                message:"This mail id is already registered."
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullName,
            email,
            password:hashedPassword
        });
        return res.status(201).json({
            success: true,
            message: "Account created successfully!"
        })
    }catch (error){
        console.log(error);
    }
}

export const login = async(req, res) =>{
    try{

        console.log(res);
        res.set("channelName", "PatelMernStack");
        const{email, password} = req.body;

        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required."
            })
        }
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(403).json({
                success:false,

                //You need to register
                message:"Incorrect email or password.",
            });
        }
        //This gives a boolean value if the password matches the one stored in our database.
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(403).json({
                success: false,
                message: "Incorrect email or password",
            });
        }
        return res.status(200).json({
            success:true,
            message:`Welcome back ${user.fullName}`
        })
    }
    catch (error){
        console.log(error);
    }
}

//headers are of two kinds
//client ka header -> client kya kya bhej raha
//server ka header -> server kya kya bhej raha

// You can send data in headers from client to server from postman
//by default samajh jaata hai server ke haam json data bhej rahe!

// 200 -> OK (success)
// 201 -> create
// 404 -> page not found
// 500 -> internal server error
// 401 -> unauthorize (user is not logged in and still trying to access)

