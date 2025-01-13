// Create a todo list using get and post

import express from 'express'
const app = express();
const port= 3000;

app.use(express.json())

const todoList = ["Go to class", "Sleep on time"]

app.get("/todoList", (req, res) =>{
    console.log(todoList);
    res.json({
        message: 'Current To-Do List',
        todos: todoList,
    });
    
})

app.post("/data", (req, res, next) =>{
    const {message,todo} = req.body

    if (!message && !todo){
        console.log("Fields are required");
        res.status(400).json({error: "Fields are required"})
    }

    todoList.push(todo)
    res.status(200).json(
        {
            message: "Todo added successfully", 
            todo:{
                message, todo
            }
        }
    )

})

app.listen(port)