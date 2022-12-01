//En este archivo esta programado el consumo de las apis y de donde se van a tomar las rutas para Postman
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.get('/pruebas', function(req, res){
  //  res.status(200).send({ mesage: 'Bienvenido al curso Raul Reyes'});
//});
app.use('/api', user_routes);

module.exports = app;