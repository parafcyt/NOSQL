import requests
import pymongo
import time

API_URL = "https://api.coinmarketcap.com/v1/ticker"


def get_db_connection(uri):

    client = pymongo.MongoClient(uri)

    return client.cryptoapp


def get_cryptocurrencies_from_api():

    r = requests.get(API_URL)

    if r.status_code == 200:

        result = r.json()

        return result

    raise Exception('Api error')


def first_element(elements):

    pass


def get_hash(value):

    pass


def get_ticket_hash(ticket_data):

    pass
    #sorted()


if __name__ == "__main__":

    while True:

        print("Guardando info crypto mongo")

        db = get_db_connection('mongodb://localhost:27017/')

        tickers = get_cryptocurrencies_from_api()

        for ticker in tickers:

            #save_ticker(db, ticker)
            pass

        time.sleep(240)

