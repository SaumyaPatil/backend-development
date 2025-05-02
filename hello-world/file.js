const fs = require('fs');

//Sync...
// fs.writeFileSync("./test.txt", "Hey there");

//Async
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});

//Here, result is returned from the functions. In case of errors, it throws error and we handle it using try catch
// const result = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);

// //Here, it doesnt return 
// fs.readFile("./contacts.txt", "utf-8", (err, res) => {
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(res);
//     }
// });

//Interview question
//Nodejs architecture and blocking, non-blocking request

//Appending file - without over-writing content of file, how we can append then and there
//The second arguement should always be a string so we need to convert it to string
// fs.appendFileSync("./test.txt", "Hey There\n");

// //Copy file
// fs.cpSync("./test.txt", "./copy.txt");

// //Delete file
// fs.unlinkSync("./copy.txt");

// //Stats of any file - when was it created, id, etc.
// console.log(fs.statSync("./test.txt"));

// console.log(fs.statSync("./test.txt").isFile());    //true

// //creating folders
// fs.mkdirSync("my-docs");

// //creates function recursively
// fs.mkdirSync("my-docs/a/b", {recursive: true});

 
//This is blocking request
console.log("1");
const result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);

console.log("2");

//This is non blocking request
console.log("1");

fs.readFile("contacts.txt", "utf-8", (err, res) => {
    console.log(result);
});

console.log("2");

