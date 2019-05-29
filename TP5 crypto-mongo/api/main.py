import pymongo
from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
cors=CORS(app,resources={r"/*": {"origins": "*"}})


def get_db_conexion(url):

    cliente = pymongo.MongoClient(url)

    return cliente.cryptoapp #nombre de la base de datos: cryptoapp


db = get_db_conexion('mongodb://mongo-crypto:27017/')

print('hols')


# RUTAS

@app.route('/')
def index():

    #return jsonify({'name': 'CryptoApp API'})
    return 'CryptoApp API'


#CONSTRUIR IMAGEN
#docker build -t="cryptomongo-api" .

#MONTAR CONTENEDOR
#docker run -it --link=mongo-crypto:mongo-crypto -p 5000:5000 cryptomongo-api