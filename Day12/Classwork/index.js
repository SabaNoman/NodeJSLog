import express from 'express'
const app = express();
const port= 3000;

// const users = [
//     {'name':'Saba', 'age':'38'},
//     {'name':'Maria', 'age':'22'},
//     {'name':'Bushra', 'age':'31'},
// ]

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world");
}
)
app.get('/about', (req, res) => {
    res.send("About page");
}
)

app.post("/data", (req, res) => {
    const {name, age} = req.body

    if (!name && !age){
        console.log("Fields are required");
        res.status(400).json({error: "Fields are required"})
    }

    res.status(200).json(
        {
            message: "Form successfully submitted", 
            recieved:{
                name, age
            }
        }
    )
})

app.listen(port)