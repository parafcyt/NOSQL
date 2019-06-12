import requests
import pymongo
from flask import Flask, jsonify, request
from flask_cors import CORS



app = Flask(__name__)
cors=CORS(app,resources={r"/*": {"origins":"*"}})

api_key='dfe3234b957f307e6e0db40c7052c2db'

ruta_imagen='https://image.tmdb.org/t/p/w500'

API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=dfe3234b957f307e6e0db40c7052c2db&language=es&query='


def get_db_conexion(url):

    cliente = pymongo.MongoClient(url)

    print('conectado a mongo')

    return cliente.cryptoapp #nombre de la base de datos: peliculas


db = get_db_conexion('mongodb://mongo-crypto:27017/')

print('mona')

#RUTAS

@app.route('/')
def index():

    return 'alexis'

@app.route('/lista')
def cargar():

    res = db.tickers.find().limit(1)
    print(res)

    #lista=['Capitán+América','Iron+Man','El+increíble+Hulk','Iron+Man+2','Thor','Los+Vengadores']
    lista=['Capitán+América','Iron+Man']
    
    for peli in lista: 
        r = requests.get(API_URL+peli)

        #guardar_peli(r.json())
        db.peliculas_coleccion.insert_one(r.json())
        #print(r.json())


    return 'bbdd inicializada'

        #raise Exception('Api de pelis error')

def guardar_peli(peli):

    coleccion= db.peliculas #traigo la coleccion peliculas
    coleccion.insert_one(peli)

if __name__ == '__main__':
    app.run(host='localhost', port='3000', debug=False)


#export FLASK_APP=app.py
#flask run

