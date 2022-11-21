from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
from DataSource import DataSource
import json

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

time = "24h"

@app.route("/top-coins")
@cross_origin()
def top_coins():

    data_source = DataSource()

    # Get top 50 coins
    top_coins_data = data_source.get_data_for_top_coins()

    # if no coins were found
    if not top_coins_data:
        # tell the user that no results were found
        return { "status": 404, "error": "No results found" }

    return { "status": 200, "coin_data": top_coins_data["data"]["coins"] }

@app.route("/graphs")
@cross_origin()
def getGraphData():
    data_source = DataSource()

    # assuming that user requests bitcoin's price history for last 24 hrs 
    uuid = "Qwsogvtv82FCd" # Bitcoin

    # Get price history for coin of uuid
    price_history = data_source.get_data_for_coin(uuid, time)

    # if no data is found
    if price_history.get('status') == 'fail':
        # tell the user that no results were found
        return { "status": 404, "error": "No results found" }

    return { "status": 200, "coin_data": price_history["data"] }

@app.route("/info")
@cross_origin()
def getCoinData():
    data_source = DataSource()

    # assuming that user requests bitcoin data for last 24 hrs (default)
    uuid = "Qwsogvtv82FCd" # Bitcoin

    # Get coin data for coin of uuid
    coinInfo = data_source.getCoinInfo(uuid)

    # if no data is found
    if coinInfo.get('status') == 'fail':
        # tell the user that no results were found
        return { "status": 404, "error": "No results found" }

    return { "status": 200, "info": coinInfo["data"] }


@app.route("/search", methods=["POST"])
@cross_origin()
def find_uuid():
    body = request.json
    data_source = DataSource()

    # find the results of coins similar to the entered query
    search_results = data_source.search_for_coin(body['query'])

    if not search_results:
        return {"status": 404, "error": "No results found" }

    return { "status": 200, "coin_data": search_results }


@app.route("/time", methods=["GET", "POST"])
@cross_origin()
def timePeriod():
    data_source = DataSource()
    uuid = "Qwsogvtv82FCd" # Bitcoin
    if request.method == "POST":
        print(f"{request.json} ")
        price_history = data_source.get_data_for_coin(uuid, request.json['body'])
        return { "status": 200, "apiData": price_history }
    return {"indices" : ["1", "2", "3", "4"] }


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__=="__main__":
    app.run()
