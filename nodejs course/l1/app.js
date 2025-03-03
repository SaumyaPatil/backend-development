let a = 10;
let b = 20;
console.log(a+b);

function greet(){
    console.log("Greet!");
}

greet();

//Assigning functions to variables - function expression
const fn = function(){
    console.log("Function expression.");
};

//Use function expression on fly - means instead of assigning a function to a variable, directly pass it
//to the function where required.
function logGreeting(fn){
    fn();
};

logGreeting(function(){
    console.log("Function expression 2.");
});

