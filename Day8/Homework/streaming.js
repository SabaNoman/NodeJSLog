import http from "http";

const writebody = function(req,res){
  res.writeHead(200, {"content-type":"text/html"});
  res.write("<h1>Hello World</h1>");
  res.end();
}
http.createServer(writebody)


// import {createReadStream, createWriteStream} from 'fs';
// var readableStream = createReadStream('readme.json');
// var writableStream = createWriteStream('output.txt',
//   {"flags":"a"}
// );

// readableStream.on('data', function(chunk) {
//     writableStream.write(chunk);
// });


// // import fs from 'fs';

// // // Use fs.createReadStream() method
// // // to read the file
// // let reader = fs.createReadStream('readme.json',
// //   {
// //     start: 100,
// //     end: 1000,
// //   }
// // );

// // // Read and display the file data on console
// // reader.on('data', function (chunk) {
// //   console.log(chunk.toString());
// // });




// // import fs from 'fs';
// // import readline from 'readline';
// // const abc = readline.createInterface({
// //   input: fs.createReadStream('readme.txt'),
// //   crlfDelay: Infinity
// // });

// // abc.on('line', (line) => {
// //   console.log(`Line from file: ${line}`);
// // });


// // import readline from 'readline';

// // // Use the Methods Methods
// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // rl.question('What is your age? ', (age) => {
// //   console.log('Your age is: ' + age);
// // });