const express = require('express')
const path = require('path')
const app = express()
const { engine } = require('express-handlebars')
const request = require('request')

const PORT = process.env.PORT || 8000

// set middleware
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', '../views')

app.get('', (req, res) => {
  res.render('home', {
    pageTitle: "Home Test",
  })
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))