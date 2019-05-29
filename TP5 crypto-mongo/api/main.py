import pymongo
from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
cors=CORS(app,resources={r"/*": {"origins": "*"}})


def get_db_conexion(url):

    cliente = pymongo.MongoClient(url)

    return cliente.cryptoapp #nombre de la base de datos: cryptoapp


db = get_db_conexion('mongodb://mongo-crypto:27017/')


def get_documents():

    params = {}

    name = request.args.get('name', '')

    limit = int(request.args.get('limit', 0))

    if name:

        params.update({'name': name})
    
    cursor = db.tickers.find(
        params,
        {'_id':0, 'ticker_hash': 0}
    ).limit(limit)

    return list(cursor)


def get_top20():

    pass


def remove_currency():

    pass


# RUTAS

@app.route('/')
def index():

    #return jsonify({'name': 'CryptoApp API'})
    return 'CryptoApp API'


@app.route('/top20', methods=['GET'])
def top20():

    return jsonify(get_top20())


#CONSTRUIR IMAGEN
#docker build -t="cryptomongo.api" .

#MONTAR CONTENEDOR
#docker run -it --link=mongo-crypto:mongo-crypto -p 5000:5000 cryptomongo-api