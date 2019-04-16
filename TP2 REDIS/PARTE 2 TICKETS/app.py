#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Apr  3 19:23:20 2019

@author: mona
"""
import redis
import random
from flask import Flask, render_template, jsonify
from flask_cors import CORS


app = Flask(__name__)  # tipo constructor
cors=CORS(app,resources={r"/*": {"origins": "*"}})


def conectarbbdd():
    """Conexion con la bbdd redis"""
    conexion = redis.StrictRedis(host='127.0.0.1', port=6379, db=1, decode_responses=True)
    try:
        if(conexion.ping()):
            print("Conectado al servidor redis")
    except ValueError:
        print(ValueError)

    return conexion


db = conectarbbdd()  # instanciamos la conexion para usarla


@app.route('/')
def index():
    """Retorna la pagina index"""

    # render_template para pasar html al cliente
    # return render_template('/index.html')
    return ''


"""
@app.route('/about')
def about():
       Retorna la pagina about
       return "About Flask Python"""


@app.route('/iniciar-tickets')
def iniciar():

    db.flushdb()  # vacía la bbdd

    precios = [250, 500, 1000, 760]

    for i in range(10):
        db.lpush(i, i, random.choice(precios), 'disponible')

    return 'Tickets cargados'


@app.route('/reservar/<nroticket>')
def reservar(nroticket):

    # creo una clave temporal para ese ticket
    db.setex(nroticket+'reservado', 240, nroticket)
    a = '# de Ticket '+nroticket+' por 4 minutos.'
    return jsonify(a)


@app.route('/comprar/<nroticket>')
def comprar(nroticket):

    # elimino la clave temporal de reserva
    db.delete(nroticket+'reservado')

    # guardamos el ticket como vendido
    db.lset(nroticket, 0, 'comprado')

    a = 'Ha comprado el ticket '+nroticket
    return jsonify(a)


@app.route('/listar/disponibles')
def listarDisponibles():
    aux = []
    for i in range(10):
        aux2 = db.lrange(i, 0, -1)
        if(aux2[0] == 'disponible' and db.pttl(str(i)+'reservado') == -2):
            aux.append(aux2)

    #convierto el vector a json

    return jsonify(aux)



@app.route('/listar/comprados')
def listarComprados():
    aux=[]
    for i in range(10):
        aux2 = db.lrange(i, 0, -1)
        if (aux2[0] == 'comprado'):
            aux.append(aux2)

    #convierto el vector a json
    return jsonify(aux)


@app.route('/listar/reservados')
def listarReservados():
    aux=[]
    for i in range(10):
        
        if(db.pttl(str(i)+'reservado') != -2):
            aux2=[i,round(db.ttl(str(i)+'reservado')/60,2)]
            aux.append(aux2)

    #convierto el vector a json

    return jsonify(aux)

    


if __name__ == '__main__':
    app.run(host='localhost', port='3000', debug=False)
