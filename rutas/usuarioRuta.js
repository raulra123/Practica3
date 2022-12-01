//Este arcchivo estan todas las rutas del proyecto
'use strict'

var express = require('express');
var UsuarioControl = require('../controlador/usuarioControl');
const usuarios = require('../modelo/usuarios');

var api = express.Router();

api.get('/probando-controlador', UsuarioControl.prueba);

api.post('/registro', UsuarioControl.registrarUsuario);

api.post('/login',UsuarioControl.accesoUsuario);

module.exports = api;

