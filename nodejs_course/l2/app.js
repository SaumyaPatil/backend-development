const greet = require("./greet.js"); //commonJS - its inbuilt in JS
// const greet = require("./greet.js").greetings;  //This returns object so we are accessing the property of the object so greet becomes a function now.
//require is a method in commonJS that takes a string input which is the module greet

// greet(100, 200);

// console.log(greet);     //This prints an object containing greetings function assigned to key greetings.
greet.greetings(100, 200); //This is used to access the property greetings of the object greet returned by module.exports
// greet(10, 20);
//If you dont pass arguements here, it gives NaN and not undefined why?

console.log(greet.sub(13, 20));
