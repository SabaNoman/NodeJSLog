import express from 'express';
import ejs from 'ejs';

const app = express();
app.set('view engine', 'ejs');
const port = 3000;

// app.use('/static', express.static('public')) //the /static is the virtual path

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
console.log(__dirname)

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/mypage", (req,res) => {
    res.render('html14')
})

app.listen(port)