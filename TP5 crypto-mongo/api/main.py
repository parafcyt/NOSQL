import pymongo
from flask import Flask, jsonify, request

app = Flask(__name__)


def get_db_connection(uri):

    client = pymongo.MongoClient(uri)

    return client.cryptoapp


db = get_db_connection('mongodb://localhost:27017/')


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

    return jsonify({'name': 'CryptoApp API'})


@app.route('/top20', methods=['GET'])
def top20():

    return jsonify(get_top20())





