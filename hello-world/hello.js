console.log("Hey there I am JS");

console.log(window);       //Error - window is not defined
console.log(alert("Hey"));        //Error - alert is not defined

//These above commands run in browser console but not here, why?
//Some JS functions are not getting executed here. Why?
//Chrome's V8 engine is not directly embedded with C++
//DOM related elements or things related to window are omitted.
//Nodejs is used to run JS in servers so the things related to DOM manipulation or related to UI in JS were removed.

//Window objects were removed, and are not available in nodejs. It only has core functionalities of JS needed in server side.
//So we cannot say that directly V8 was removed and embedded with C++ but many functionalities were removed and also some functionalities were added.
//For example cryptography, encryption, decryption and hashing, etc. These functionalities or packages or file handling were added and work related to DOM that is not required in server side were removed.


