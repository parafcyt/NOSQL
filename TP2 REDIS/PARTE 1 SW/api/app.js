// imports
const express = require('express');
const morgan = require('morgan');
//const cors = require('cors');
const path = require('path');

// instancio el servidor web
const app = express();
// para usar la app de angular
app.use(express.static(__dirname + '/dist/cliente'));

// middlewares
app.use(express.json());
app.use(morgan('dev'));
//app.use(cors({origin: 'http://localhost:4200'}));

// rutas
app.use('/api/', require('./rutas/personajes.rutas'));

// para reiniciar bbdd
/*
const redisCliente = require('./bbdd/conexion');
const conexion = redisCliente();
conexion.flushdb();
*/

// cuando entro a la pagina mando la app de angular
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/cliente/index.html'));
});

// instancio el servidor web
app.listen(3000,() => {
    console.log('servidor express iniciado en el puerto 3000');
});