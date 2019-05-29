import requests
import pymongo
import time

API_URL = "https://api.coinmarketcap.com/v1/ticker"

#CONEXION CON MONGODB
def get_db_conexion(url):

    cliente = pymongo.MongoClient(url)

    return cliente.cryptoapp #nombre de la base de datos: cryptoapp


def get_crypto_desde_api():

    r = requests.get(API_URL)

    if r.status_code == 200:

        result = r.json()

        return result

    raise Exception('Api de crypto error')

#guardar las monedas en mongo
def guardar_ticker(conexion, ticker):

    coleccion= conexion.tickers #traigo la coleccion tickers
    coleccion.insert_one(ticker)


def first_element(elements):

    pass


def get_hash(value):

    pass


def get_ticket_hash(ticket_data):

    pass
    #sorted()








if __name__ == "__main__": #si este es main lo ejecuta

    while True:

        print("Guardando info de crypto mongo on " + time.strftime("%c"))

        conexion = get_db_conexion('mongodb://mongo-crypto:27017/') #paso ruta de la bbdd del contenedor

        conexion.tickers.delete_many({}) #vacío la coleccion tickers
        

        tickers = get_crypto_desde_api() #traigo el listado de monedas

        for ticker in tickers:

            guardar_ticker(conexion, ticker)

        time.sleep(240)


#LEVANTAR BBDD DE MONGO
# docker run -d --name=mongo-crypto mongo


#CONSTRUIR IMAGEN

#docker build -t="cryptomongo-agente" .

#MONTAR IMAGEN

#docker run -it --link=mongo-crypto:mongo-crypto cryptomongo-agente