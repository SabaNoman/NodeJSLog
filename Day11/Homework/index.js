// Need to check the access control of admin and user with given below URL with Params
// http://localhost:8000/users/1/?pwd=hello@1234&role=admin   === write welcome admin
// http://localhost:8000/users/2/?pwd=user@1234&role=user       === write welcome user

import express from 'express'
const app = express();
const port = 8000;

app.use((req, res, next) => {
    console.log(`Logging ${req.method} ${req.url}`);
    next();
})

app.use("/users/:id", (req, res, next) => {
    const {pwd, role} = req.query;
    const userId = req.params.id;
    console.log(role, pwd)

    if (userId == 1 && pwd === "hello@1234" && role === "admin") {
        console.log("Access given to admin")
        res.send("----WELCOME ADMIN----")
        next()
    }
    else if (userId == 2 && pwd === "user@1234" && role === "user") {
        console.log("Access given to user")
        res.send("WELCOME USER")
        next()
    }
    else{
        res.status(402).send("Forbidden");
    }
})

app.get("/", (req, res) => {
    res.send("Hello world")
});

app.listen(port)