const fs = require("fs");

//reading file
//format of file is also specified which is string here
//Even if its in other format, it will still be read as string cause it should be readable as human
// fs.readFile("input.txt", 'utf-8', (err, data)=>{           //It is async and non-blocking
//     if(err)throw err; //Suppose your path of file is wrong, it will throw this error
//     console.log(data);
// });

//It returns data - It is synchronous and blocking
// const data = fs.readFileSync("input.txt", 'utf-8');
// console.log(data);


//Writing file - this erases text written in input.txt file and rewrites the text provided
// fs.writeFile("input.txt", "Hello World!", (err)=>{
//     if(err)throw err;
// });

//To append text inside the input file without erasing previous text
// fs.appendFile("input.txt", "\nHello this is nodejs world!", (err)=>{
//     if(err)throw err;
// });

//If you want to delete any file - you can use unlink
// fs.unlink("input.txt", (err)=>{
//     if(err)throw err;
// });



//When file size is really large (in MBs) - recommended to read files
// const readStream = fs.createReadStream("input.txt", 'utf-8');
// console.log(readStream);

// readStream.on('data', (chunk)=>{   //We get data in chunks
//     console.log(chunk);
// })

// //It is 'end' event
// readStream.on('end', ()=>{
//     console.log("Reading completed!");
// });

//end and data are events

//writeStream - rewrites the file
// const writeStream = fs.createWriteStream("input.txt", "utf-8");
// writeStream.write("Welcome to Nodejs full course!");

//pipe - to transfer data from one file to another
const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

//Analogy of water being fetched in fields through engine
readStream.pipe(writeStream);

//How does a browser work? - How web applications work?
