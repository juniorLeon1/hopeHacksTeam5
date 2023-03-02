const express = require ('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 2000;

//set handlebars middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//set handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: "This is stuff..."
    });
});

// //set handlebar routes
// app.get('/contact', function (req, res) {
//     res.render('contact', {
//         stuff: "This is stuff..."
//     });
// });

//set handlebar routes
app.get('/about', function (req, res) {
    res.render('about', {
        stuff: "This is stuff..."
    });
});


// set static folder
app.use(express.static(path.join(__dirname, 'public')));





app.listen(PORT, () => console.log('Server Listening on port ' + PORT));

