//imports
const express=require('express');
const rutas= express.Router();
const controladores=require('../controladores/geo.controladores');


//creo rutas
rutas.get('/radio1km',controladores.radios);
rutas.get('/iniciarbbdd',controladores.iniciarListas);
rutas.post('/distancia',controladores.distancia);
rutas.post('/radio',controladores.radioPara1);

//exporto
module.exports=rutas;