//How to send a file from backend

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':"text/html"});

    //Use this 
    const filePath = __dirname+"/index.html";  //'dirname' gives current working directory
    console.log(filePath);
    // const htmlContent = fs.readFileSync(filePath);
    // res.end(htmlContent);


    //Or this 
    const dirPath = path.join(__dirname, "index.html");
    const htmlContent = fs.readFileSync(dirPath);
    res.end(htmlContent);
});

server.listen(3000);

