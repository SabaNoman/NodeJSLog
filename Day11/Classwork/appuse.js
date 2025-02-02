import express from 'express';
const app = express();
const port= 3000;

app.use((req, res, next) => {
    console.log('hi');
    console.log(req.query);
    next();
})

app.get('/', (req, res) => {
    res.send("HEello world");    
})

app.use('/admin', (req, res, next) => {
    console.log(req.body); 
    next();
})

app.get("/abc/:id/", (req, res) =>{
    console.log(req.body); // It shows as undefined because GET requests don't have a body
    res.send(`hello ${req.params.id}`)
})


app.listen(port)