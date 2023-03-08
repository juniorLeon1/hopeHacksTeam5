const express = require ('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const request = require('request')

const PORT = process.env.PORT || 2000;

//set handlebars middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function call_api(finishedAPI, input='Translated text will appear here!') {

    const juniorKey = '54523f2d11msh4eaa24da65900c6p1f3717jsn48bde874ef56'
    const alvaroKey = 'a5cb1934a6msh8b958313d591befp144a8ejsn4f948d3fbcd0'
    const miguelKey = '405cc0d305mshdfb277581fb56c2p1be2c7jsn3fc745800ade'
    const breKey = 'ee07fa8c2fmsh59a35bc0f84ebd6p136e3bjsn3c1cefb45466'

    const options = {
    method: 'POST',
    url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': juniorKey,
      'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com',
      useQueryString: true
    },
    body: {
      from: 'en',
      to: 'es',
      e: '',
      q: [input]
    },
    json: true
  };

  request(options, (error, response, body) => {
    if (error) {
        console.error(error);
      return;
    } else if (response.statusCode === 200) {
        finishedAPI(body);
    }
  });
}

//set handlebar routes
app.get('/', (req, res) => {
    call_api(function(doneAPI) {
        res.render('home', {
            translated: doneAPI
        });
    })
});

app.post('/', (req, res) => {
    call_api(function(doneAPI) {
        res.render('home', {
            translated: doneAPI,
        });
    }, req.body.inputText)
});

app.get('/about', function (req, res) {
    res.render('about', {
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
