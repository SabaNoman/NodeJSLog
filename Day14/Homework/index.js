import express from 'express';
const app = express();
const port = 3000;
app.set('view engine', 'ejs')
app.use(express.json())

app.post('/userpage', (req, res, next) => {
    // const {userid, name, pwd} = req.body

    // if (!name){
    //     console.log("Fields are required");
    //     res.status(400).json({error: "Fields are required"})
    // }

    // res.status(200).json(
    //     {
    //         message: "Form successfully submitted", 
    //         recieved:{
    //             userid, name, pwd
    //         }
    //     }
    // )

    // const users = [
    //     { id:1, name: 'Saba', pwd: 'abcd'},
    //     { id:2, name: 'Maria', pwd: 'efgh'},
    //     { id:3, name: 'Bushra', pwd: "xyz"},
    //   ];
    
    // const userId = parseInt(req.params.id);
    // console.log(req.params.id)
    // const user = users.find((u) => u.id === userId);

    // if (user) res.send("great")
    // res.render('usersindex', {
    //     data:[user]
    //    });
    console.log('pleeeeeease');
    next();
//    res.render('success.html')
})

app.listen(port, () => console.log(`Port running on ${port}`));