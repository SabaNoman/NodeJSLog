// Create a todo list using get and post
import express from 'express'
const app = express();
const port= 3000;
app.use(express.json())

const todoListEntries = ["Go to class", "Sleep on time"]

app.get("/todoList", (req, res) =>{
    console.log(todoListEntries);
    res.json({
        mytodolist: todoListEntries,
    });
    
})

app.post("/todoList", (req, res) =>{
    const {newtodo} = req.body
    //When destructuring, I need to give the var name the same as I have given in my POST request
    //because the property name in the POST request body should match the expected property name.
    console.log(newtodo)

    if (!newtodo){
        console.log("Fields are reqd");
        res.status(400).json({error: "Fields are required"})
    }

    else{
        todoListEntries.push(newtodo)
        res.status(200).json(
        {
            newtodo        
        }
    )}
    
})

app.listen(port)