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

    resultados=[]
    
    for uno in db.tickers.find().limit(20):
        uno.pop('_id')
        resultados.append(uno)

    #return jsonify({'name': 'CryptoApp API'})



    return jsonify(resultados)


#if __name__ == '__name__':
#    app.run(host='localhost', port='5000')

#CONSTRUIR IMAGEN
#docker build -t="cryptomongo-api" .

#MONTAR CONTENEDOR
#docker run -it --link=mongo-crypto:mongo-crypto -p 5000:5000 cryptomongo-api

#PARA NO TENER QUE REINICIAR CONTENEDOR
#export FLASK_APP=main.py
#export FLASK_DEBUG=1
#flask run