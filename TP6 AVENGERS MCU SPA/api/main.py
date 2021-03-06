import requests
import pymongo
from flask import Flask, jsonify, request
from flask_cors import CORS



app = Flask(__name__)
cors=CORS(app,resources={r"/*": {"origins":"*"}})

api_key='dfe3234b957f307e6e0db40c7052c2db'

ruta_imagen='https://image.tmdb.org/t/p/w500'

API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=dfe3234b957f307e6e0db40c7052c2db&language=es&query='

API_URL1 = 'https://api.themoviedb.org/3/movie/'
API_URL2 = '?api_key=dfe3234b957f307e6e0db40c7052c2db&language=es'

def get_db_conexion(url):

    cliente = pymongo.MongoClient(url)

    print('conectado a mongo')

    return cliente.peliapp #nombre de la base de datos: peliculas


db = get_db_conexion('mongodb://localhost:27017/')


print('mona')

#RUTAS

@app.route('/')
def index():
    muestro=[]
    for peli in db.pelis.find():
        peli.pop('_id')
        muestro.append(peli)
    return jsonify(muestro)

@app.route('/iniciarbd')
def cargar():

    db.pelis.delete_many({})
    #lista=['Capitán+América','Iron+Man','El+increíble+Hulk','Iron+Man+2','Thor','Los+Vengadores']
    lista=['1771', '1726', '1724', '10138', '10195','24428']
    
    respuestas =[]

    for peli in lista: 
        r = requests.get(API_URL1+peli+API_URL2)
        respuestas.append(r.json())

    for res in respuestas:
        db.pelis.insert_one(res)

    return jsonify('bbdd inicializada')

#cargar nuevo
@app.route('/cargar/<id>',methods = ['POST'])
def nuevo(id):
    r = requests.get(API_URL1+id+API_URL2)
    db.pelis.insert_one(r.json())

    return jsonify('prueba')

#modificar
@app.route('/modificar',methods = ['PUT'])
def modificar():
    peliactualizada =request.get_json()
    db.pelis.replace_one({'id': peliactualizada['id']},peliactualizada)
    print(peliactualizada)
    return jsonify('modificó')

#eliminar
@app.route('/eliminar/<id>',methods = ['DELETE'])
def eliminar(id):
    db.pelis.delete_one({'id': int(id)})
    return jsonify('eliminó')

if __name__ == '__main__':
    app.run(host='localhost', port='3000', debug=False)

@app.route('/buscar/<idpeli>',methods=['GET'])
def buscar(idpeli):
    for peli in db.pelis.find({'id':int(idpeli)}):
        peli.pop('_id')
    return jsonify(peli)


#export FLASK_APP=main.py
#flask run

