function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

//The value of exports is what is exported to file where required.
//'module' is an object jiske exports me Piyush dal diya
// module.exports = {
//     addFn: add, 
//     subFn: sub,
// };

//Way 2 to send the functions
module.exports = {
    add,
    sub,
};

//Export using exports object
exports.add = (a, b) => a+b;
exports.sub = (a, b) => a-b;

