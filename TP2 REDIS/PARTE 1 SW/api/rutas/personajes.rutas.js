const express = require('express');
const controladores = require('../controladores/personajes.controladores');

const rutas = express.Router();

// ALTA PERSONAJE
rutas.post('/alta/:episodio/:personaje', controladores.altaPersonaje);

// BAJA PERSONAJE
rutas.delete('/baja/:episodio/:personaje', controladores.bajaPersonaje);

// LISTAR EPISODIO
rutas.get('/listar/:episodio', controladores.listarPersonajes);

module.exports = rutas;
