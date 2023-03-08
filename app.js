const express = require('express')
const hbs = require('hbs');
require('dotenv').config()
const app = express();



const port = process.env.PORT;
//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');



//Cómo servir contenido estático
app.use( express.static('public') )

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'By Omar MC',
    titulo: 'Home'
  })
})
app.get('/generic', function (req, res) {
    //res.sendFile(__dirname + '/public/generic.html')
    res.render('generic', {
        nombre: 'By Omar MC',
        titulo: 'Generic'
      })
  })
  app.get('/elements', function (req, res) {
    //res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', {
        nombre: 'By Omar MC',
        titulo: 'Elemets'
      })
  })

app.listen(port)
