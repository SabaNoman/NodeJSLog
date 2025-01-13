// Build a small express app for managing users.
// create a dummy user object

// Routes:
// Get: /users: fetch all users
// Get :/users/:id  search user by id
// if user age is lesser than 18 do not allow
// try to use all routes like ? + rondom *.

const users = [
    { id: 1, name: 'Saba', age: 37 },
    { id: 2, name: 'Maria', age: 17 },
    { id: 3, name: 'Bushra', age: 30 },
    { id: 4, name: 'Marium', age: 26 },
];

import express from 'express'
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world!!!!!");
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/users/:id', (req, res) => {
    
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
    console.log("ok till here")

    if (!user) {
        res.status(404).json({error: 'User not found'})
    }
    
    if (user.age<18){
        res.status(403).json({error: "User is under 18. Access denied."})
    }

    res.json(user);
})

//Routing using different string patterns
app.get('/myuser*', (req, res) => {
    res.send('Routing using string patterns')
})

app.get('/myn?o?t?sogreatuser*', (req, res) => {
    res.send('Useless User')
})

app.get('/randomtextfile.txt*', (req, res) => {
    res.send('Random text file')
})

//Routing using Regex
app.get(/hello*/, (req, res) => {
    res.send('HELLOOOOOOOOOOO')
})

app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
})

app.listen(port, () => console.log(`Server is working at port ${port}`))