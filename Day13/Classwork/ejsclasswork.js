import express from 'express';
// import ejs from 'ejs';
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

// app.get("/", (req, res) => {
//     res.render('index')
// })

//Npm Ejs or Digital Ocean for the EJS topic
// index page
app.get('/', function(req, res) {
    var mascots = [
      { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
      { name: 'Tux', organization: "Linux", birth_year: 1996},
      { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
  
    //render will search for the index page in the views folder
    res.render('index', {
      mascots: mascots,
      tagline: tagline
    });
  });
  
app.listen(port);