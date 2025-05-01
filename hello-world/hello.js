// console.log("Hey there I am JS");

// console.log(window);       //Error - window is not defined
// console.log(alert("Hey"));        //Error - alert is not defined

//These above commands run in browser console but not here, why?
//Some JS functions are not getting executed here. Why?
//Chrome's V8 engine is not directly embedded with C++
//DOM related elements or things related to window are omitted.
//Nodejs is used to run JS in servers so the things related to DOM manipulation or related to UI in JS were removed.

//Window objects were removed, and are not available in nodejs. It only has core functionalities of JS needed in server side.
//So we cannot say that directly V8 was removed and embedded with C++ but many functionalities were removed and also some functionalities were added.
//For example cryptography, encryption, decryption and hashing, etc. These functionalities or packages or file handling were added and work related to DOM that is not required in server side were removed.

//Whenever we create a new project, we do npm init as it creates a new template or file that is used to run our project.
//package.json file is a configuration file, whatever dependancies we install, whenever we publish, whatever code we run, we do it here.
//It can be created manually but there are chances of errors so we do npm init that creates the file automatically.

// const math = require('./math');

//We can even destructure the functions
const {add, sub} = require('http');


// console.log("Add value is", math.addFn(2, 4));
// console.log("Sub value is", math.subFn(2, 4));

console.log("Add value is", math.add(2, 4));
console.log("Sub value is", math.sub(2, 4));

//You can destructure and use 
console.log("Add value is", add(2, 3));
console.log("Sub value is", sub(2, 4));

 