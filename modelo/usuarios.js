//Este archivo es el esquema usuarios y es el esquema principal
'use strict'

var mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var EsquemaUsuarios = Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    rol: String,
    imagen: String
});

module.exports = mongoose.model('Usuarios', EsquemaUsuarios);