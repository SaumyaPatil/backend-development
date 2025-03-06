import express from "express";

const app = express();

app.use(function(req, res, next){
    console.log("Middleware is called");
    next(); //Untill you dont call next function the lines below wont execute. Here the middleware has caught the data coming from client.
})

//Before executing any of these requests, firstly the middleware will be called!
app.get("/", (req, res)=>{
    console.log("Home page is called");
    res.send("Hello");
})

app.get("/user", (req, res)=>{
    console.log("Home page2 is called!");
    res.send("Hello 2");
})

app.listen(8000, ()=>{
    console.log("Server listen at port 8000");
})

