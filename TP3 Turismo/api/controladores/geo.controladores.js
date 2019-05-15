//imports

    //conexion a redis
const redisCliente=require('../conexion/conexion');
const conexion= redisCliente();
const lista=['cervecerias', 'farmacias', 'universidades','centro de emergencias','supermercados'];
//var resultados=[];

//funciones

exports.radioPara1 =(req,res)=>{
    conexion.georadius(req.body.rubro,req.body.lat,req.body.lon,'1','km',(err,value)=>{
        console.log(value);
        res.send(value);
    });
}

exports.radios =(req,res)=>{
    var resultados= new Array();
    //console.log('resultados1 nuevo: '+resultados1);
    for (let i = 0; i < lista.length; i++) {

        conexion.georadius(lista[i],req.body.lat,req.body.lon,'1','km',(err,value)=>{
            //console.log('muestro value'+i+value);
            // for (let j = 0; j < value.length; j++) {
            //     resultados.push(value[j]);
            //     console.log('value'+j+': '+value[j]);

            // }
            //resultados.push.apply(value, resultados1)
            //resultados=resultados1.concat(value);
            //console.log('resultados: '+resultados);
            //Array.prototype.push.apply(resultados, value);
            //resultados.push(resultados);
            
            
            //resultados[i]=value;
            console.log(resultados);

        }); 

        //console.log('RESULTADOS:'+resultados[i]);
        
    }
    console.log('muestro resultados:'+resultados);
    
    res.send(resultados);
}

exports.distancia=(req,res)=>{

    conexion.geoadd('distancia',req.body.lat,req.body.lon,'usuario');

    conexion.geopos(req.body.rubro, req.body.lugar, (err,value)=>{
        console.log(value);
        
        conexion.geoadd('distancia',value[0][0],value[0][1], req.body.lugar);
     
    });

    conexion.geodist('distancia','usuario',req.body.lugar, 'km',(err,value)=>{
        console.log(value);
        

        if (value==null) {
            this.distancia(req,res);
        }
        else {
            res.send(value);
        }
        
        
    });

}

    //inicializacion de bbdd
exports.iniciarListas =(req,res)=>{

    //reseteo la bbdd
    conexion.flushdb();

    conexion.geoadd(lista[0],'-32.476350','-58.248431','Cervecería Lagash');
    conexion.geoadd(lista[0],'-32.479699','-58.235290','Cervecería 7 Colinas');
    conexion.geoadd(lista[0],'-32.480378','-58.233895','Cervecería Drakkar');
    conexion.geoadd(lista[0],'-32.484532','-58.236942','Cervecería Biguá');

    conexion.geoadd(lista[1],'-32.479869','-58.234614','Farmacia Círculo Católico de Obreros');
    conexion.geoadd(lista[1],'-32.483751','-58.235801','Farmacia Vitamina');
    conexion.geoadd(lista[1],'-32.480051','-58.236526','Farmacia Argachá');
    conexion.geoadd(lista[1],'-32.489191','-58.228870','Farmacia Flores');

    conexion.geoadd(lista[2],'-32.495510','-58.229644','Universidad Tecnológica Nacional');
    conexion.geoadd(lista[2],'-32.481524','-58.229188','Universidad de Concepción del Uruguay');
    conexion.geoadd(lista[2],'-32.478903','-58.232822','Universidad Autónoma de Entre Ríos FCYT');
    conexion.geoadd(lista[2],'-32.480219','-58.261312','Universidad Nacional de Entre Ríos');

    conexion.geoadd(lista[3],'-32.481147','-58.261099','Hospital Justo José de Urquiza');
    conexion.geoadd(lista[3],'-32.479744','-58.236865','Cooperativa Médica');
    conexion.geoadd(lista[3],'-32.483241','-58.230664','Clínica Uruguay');
    conexion.geoadd(lista[3],'-32.479829','58.231179','Círculo Médico de Concepción del Uruguay');

    conexion.geoadd(lista[4],'-32.489202','-58.230296','Supermercado Gran Rex I');
    conexion.geoadd(lista[4],'-32.486262','-58.232637','Supermercado Dar El Supremo');
    conexion.geoadd(lista[4],'-32.488479','-58.241781','Supermercado DIA');
    conexion.geoadd(lista[4],'-32.485651','-58.239735','Supermercado Yong Qiang');

    

    res.send({msj:'BASE DE DATOS INICIADA'});
}
