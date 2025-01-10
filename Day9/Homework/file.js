// Assignment - Create file using fs file system also read 
// and write the specific amount of data using start and end into another file.
// Serve the static file html into http create server

import fs from 'fs';
import http from 'http'
const data = `Node.js is a cross-platform, open-source JavaScript runtime environment
that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, 
and executes JavaScript code outside a web browser`

fs.writeFile('newfile.txt', data, (err) => {
    if (err) {console.log('Failure')}
    console.log('File Created');    
    });

const readableStream = fs.createReadStream('newfile.txt', {
    start: 0, end: 25
})

const writableStream = fs.createWriteStream('verynewfile.txt', {'flags':'a'})

readableStream.on('data', (chunk) =>
    {
    writableStream.write(chunk),
    console.log(chunk.toString())
    }
)

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => 
    {
        res.writeHead(200, {'Content-type':'text/html'})
        res.write(data);
        res.end();
    })
    }
).listen(3000);
