//Day14/Homework
import express from 'express';
const app = express();
const port = 3000;
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads
app.use('/static', express.static('assets'))

app.post('/userpage', (req, res) => {
    const {userid, name, pwd} = req.body    
    console.log(req.body)

    if (!name || !userid || !pwd){
        console.log("Fields are required");
        res.status(400).json({error: "Fields are required"})
    }    

    const users = [
        { id:1, name: 'Saba', pwd: 'abcd'},
        { id:2, name: 'Maria', pwd: 'efgh'},
        { id:3, name: 'Bushra', pwd: "xyz"},
      ];
    
    console.log(userid)
    const user = users.find((u) => u.id == userid);
    console.log(typeof(userid))

    if (!user)        
        res.send("UserId is incorrect")
    
    if (user.pwd == pwd)
        // res.render('success')
        res.render('success', {
            data:user
        });
    else res.send("Password is incorrect")
    
})

app.listen(port, () => console.log(`Port running on ${port}`));