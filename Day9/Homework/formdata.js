// Create a Registration form and when the user submits the form, save that entry in a JSON file. 
// and also read the json file in the browser.
// a form html // read form data and convert into json
// and show json data into file


import http from 'http';

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/') {
        let body = '';

        // Collect data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // When all data is received
        req.on('end', () => {
            const formData = JSON.parse(body);
            console.log('Form Data:', formData);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Form data received!' }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});


/* <script>
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/formjsondata', (req, res) => {
const { id, name, age } = req.body;
console.log(`Id: ${id} Name: ${name}, Age: ${age}`);
res.send('Form data received!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
</script> */