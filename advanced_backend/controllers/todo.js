import { User } from "../models/user";

export const createTodo = async (req, res) =>{
    try{
        const {title, description} = req.body;
        if(!title || !description){
            return res.status(403).json({
                success:false,
                message:"All fields are required."
            })
        }

        const todo = new Todo({title, description});
        todo.save();

        return res.status(201).json({
            success:true,
            message:"Todo created",
            todo,
        })

    }catch (error){
        console.log(error);
    }
}
