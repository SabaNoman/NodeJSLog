// Build a small express app for managing users.
// create a dummy user object

// Routes:
// Get: /users: fetch all users
// Get :/users/:id  search user by id
// if user age is lesser than 18 do not allow

import express from 'express';
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

// index page
app.get('/users', function(req, res) {
    var users = [
      { id:1, name: 'Saba', age: 35},
      { id:2, name: 'Maria', age: 16},
      { id:3, name: 'Bushra', age: 27},
      { id:4, name: 'Hania', age: 22}
    ];
    
    //here, data is the users array passed from above
    res.render('usersindex', {
      data:users
    });
  });

  app.get('/users/:id', function(req, res) {
    var users = [
      { id:1, name: 'Saba', age: 35},
      { id:2, name: 'Maria', age: 16},
      { id:3, name: 'Bushra', age: 27},
      { id:4, name: 'Hania', age: 22}
    ];
    
    const userId = parseInt(req.params.id);
    console.log(req.params.id)
    const user = users.find((u) => u.id === userId);
    console.log("hello")
    console.log(user)
    
    if (!user) {
      res.status(404).json({error: 'User Id is incorrect'})
    }
    
    if (user.age<18){
        res.status(403).json({error: "User is under 18. Access denied."})
    }

    res.render('usersindex', {
     data:[user] //Wrapped the user object in an array so that it works on the forEach loop
    });

  });
  
app.listen(port);
