const express = require('express')
const app = express()

//cASRGANDO EL PUERTO
require('dotenv').config()
const port = process.env.PORT;
//servir contendio estatico
app.use( express.static('public'))
// uso de parciales para handlebars
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partial');

//Usar el handlebar que va a permitir renderizar contenido dinamico por el metodo render
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index')//con este método renderizo desde el backend con hbs
  //desde las rutas podemos enviar objetos literales para el uso de sus valores en la vista
  
})
app.get('/elements', function (req, res) {
  res.render('elements')
})
app.get('/generic', function (req, res) {
  res.render('generic')
})

app.listen(port)

console.log(`Servidor funcionando atravez del puerto ${port}`)