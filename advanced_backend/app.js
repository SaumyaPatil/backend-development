import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
})

//Now we created a basic server, now we have to make connection to database
