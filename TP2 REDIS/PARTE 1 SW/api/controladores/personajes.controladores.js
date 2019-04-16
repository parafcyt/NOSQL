const redisCliente = require('../bbdd/conexion');

const conexion = redisCliente();

// ALTA PERSONAJE
exports.altaPersonaje = (req, res) => {
    conexion.lpush(req.params.episodio, req.params.personaje, (err,value) => {
        //console.log(value);
        res.send({res: 'guardado'});
    });
}

// BAJA PERSONAJE
exports.bajaPersonaje = (req, res) => {
    conexion.lrem(req.params.episodio, 0, req.params.personaje, (err,value) => {
        //console.log(value);
        res.send({res: 'eliminado'});
    });
}

// LISTAR PERSONAJES
exports.listarPersonajes = (req, res) => {
    conexion.lrange(req.params.episodio, 0, -1, (err,value) => {
        //console.log(value);
        res.send(value);
    });
}
