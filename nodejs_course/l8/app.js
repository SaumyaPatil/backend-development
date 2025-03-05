//defining routes

const http = require("http");
const { chunk } = require("lodash");

//defining routes - What happens when we hit a route?
const server = http.createServer((req, res)=>{
    // console.log(req.url);
    // if(req.url === '/'){
    //     res.writeHead(200, {'Content-Type':'text/plain'})
    //     res.end("Home");
    // }else if(req.url === '/api/user'){
    //     const user = {
    //         name: "Saumya!",
    //         age: 22,
    //         email: "saupatil10dec@gmail.com"
    //     }
    //     const data = JSON.stringify(user); //Converting to string
    //     console.log(JSON.parse(data)); //Converting to JSON

    //     res.writeHead(200, {'Content-Type':'application/json'})
    //     res.end(data);       
    // }else if(req.url === "/login"){
    //     res.writeHead(200, {'Content-Type':'text/plain'})
    //     res.end("Login Successfull");
    // }else if(req.url === "/signup"){
    //     res.writeHead(200, {'Content-Type':'text/plain'})
    //     res.end("Signup successfull");
    // }else{
    //     res.writeHead(404, {'Content-Type':'text/plain'})
    //     res.end("Page not found!");
    // }


    //Handling post method - test this using postman as we are testing api, similarly you can create frontend using react.js and create form and submit
    if(req.method === "POST" && req.url === "/submit"){
        let body = "";
        req.on('data', (chunk)=>{
            body = body+chunk.toString(); //convets buffer to string -> Hello ascii is 128, 182, 100, ... this is buffer 
        })

        //Ye kyu karna padta hai? Iska kya need hai? - data chunks me aa raha hai toh server ko pata chalna chahiye na ke data recieve ho gaya!!!
        //End event triggered when all data recieved!
        req.on('end', ()=>{
            console.log(JSON.parse(body));

            //ye sab kyu???
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify({success:true, message:"Account created successfully!"}))
        })
    }else{
        res.writeHead(404, {'Content-Type':'application/json'});
        res.end(JSON.stringify({success:false, message:"Not Found!"}))
    }
});

server.listen(8000, ()=>{
    console.log("Server listen at port 8000");
})
