function sum(a, b){
    return a+b;
}

console.log(sum(10, 20));

function greetWithSum(text, a, b){
    const result = sum(a, b);
    console.log(text, result);
}

greetWithSum("Hello I am greeting with sum", 100, 200, sum);

//Module is a piece of code that can be used within any component across the application

