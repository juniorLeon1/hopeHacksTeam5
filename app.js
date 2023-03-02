const express = require ('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const translate = require('./utils/translate')

// console.log(translate)

const PORT = process.env.PORT || 2000;

//set handlebars middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: "Welcome to our language translator application! In today's connected world, communication is key, and our app is designed to help you break down language barriers and connect with people from all around the world. With our powerful translation technology, you can translate text and voice from one language to another in just seconds. Whether you're traveling, studying, or working with people from different countries, our app has accurate and efficient translation. Please explore the amazing features our app has to offer and start communicating with the world!"
    });
});

app.post('/', (req, res) => {
    res.send('home', {

    })
});


app.get('/about', function (req, res) {
    res.render('about', {
        // stuff: "Welcome to our language translator application! In today's connected world, communication is key, and our app is designed to help you break down language barriers and connect with people from all around the world. With our powerful translation technology, you can translate text and voice from one language to another in just seconds. Whether you're traveling, studying, or working with people from different countries, our app has accurate and efficient translation. Please explore the amazing features our app has to offer and start communicating with the world!"
    });
});

app.get('/signUp', function (req, res) {
    res.render('signUp', {
        prem: "Join SpeakEasy!'s Premium selection to learn more than 100+ languages to enhance your ability to communicate effectively. The Premium selection provides access to advanced features and a wider range of language options"
    });
});

app.get('/log', function (req, res) {
    res.render('log', {
    });
});


// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));