//imports
const express = require('express');
//const cors = require('cors');
const morgan = require('morgan');
const path = require('path'); //para que el servidor mande el angular

//instancio servidor
const app=express();

// para usar la app de angular
app.use(express.static(__dirname + '/dist/cliente'));


//middlewares
app.use(morgan('dev'));
app.use(express.json());
//app.use(cors({origin:'http://localhost:4200'})); //acá el servidor d angular se puede comunicar con el de api

//llamo a rutas
app.use('/api',require('./rutas/geo.rutas'));

// cuando entro a la pagina mando la app de angular
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/cliente/index.html'));
}); //cuando llega una petición desde el navegador manda el archivo index.html, el ppal. de angular, al navegador



//corro servidor web
app.listen(3000,()=>{
    console.log('escuchando en el 3000');
});