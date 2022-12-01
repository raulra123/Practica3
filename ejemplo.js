//En este archivo esta la conexion con mongo 
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017',(err,res) => {
    if (err) {
        throw err;
    } else {
        console.log("conexión exitosa");
        app.listen(port, function() {
            console.log("Servidor de api rest de musica escuchando en http://localhost:" + port);
        });
    }
})