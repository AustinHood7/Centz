from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
from DataSource import DataSource
import json

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

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

    # assuming that user requests bitcoin data for last 24 hrs (default)
    uuid = "Qwsogvtv82FCd" # Bitcoin

    # Get coin data for coin of uuid
    price_history = data_source.get_data_for_coin(uuid)

    # if no data is found
    if not price_history:
        # tell the user that no results were found
        return { "status": 404, "error": "No results found" }

    return { "status": 200, "coin_data": price_history["data"] }

@app.route("/search", methods=["POST"])
@cross_origin()
def find_uuid():
    body = request.json
    data_source = DataSource()
    search_results = data_source.search_for_coin(body['query'])

    if not search_results:
        return {"status": 404, "error": "No results found" }

    return { "status": 200, "coin_data": search_results } 

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__=="__main__":
    app.run()
