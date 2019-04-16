const redis = require('redis');

module.exports = () => {
    // instancio la bbdd redis
    const redisCliente = redis.createClient(6379, "redis-sw");

    // me conecto a la bbdd
    redisCliente.on("connect", () => {
        console.log("Conectado a redis service starwars");
    });

    return redisCliente;
}