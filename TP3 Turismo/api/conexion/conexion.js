//imports
const redis = require('redis');

//exporto
module.exports = ()=>{

    //instancio conexion a bbdd redis

    const redisCliente=redis.createClient();

    //me conecto a la bbdd

    redisCliente.on("connect",()=>{
        console.log('conectado a redis');
        
    });

    return redisCliente;
}

