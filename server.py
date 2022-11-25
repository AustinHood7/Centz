from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
from DataSource import DataSource
import json

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

# set global time period variable (24 hours default)
time = "24h"
# set global UUID variable (Bitcoin default) 
uuid = "Qwsogvtv82FCd"

@app.route("/top-coins")
@cross_origin()
def top_coins():
    data = DataSource()
    # Get top 50 coins
    top_coins_data = data.get_data_for_top_coins()

    # if no coins were found
    if not top_coins_data:
        # tell the user that no results were found
        return { "status": 404, "error": "No results found" }

    return { "status": 200, "coin_data": top_coins_data["data"]["coins"] }

@app.route("/graphs")
@cross_origin()
def get_graph_data():
    data = DataSource()
    # Get price history for coin of uuid
    price_history = data.get_data_for_coin(uuid, time)

    # if no data is found
    if price_history.get('status') == 'fail':
        # tell the user that no results were found
        return { "status": 404, "error": "No results found" }

    return { "status": 200, "coin_data": price_history["data"] }

# get data for default info option
@app.route("/info", methods=["GET"])
@cross_origin()
def get_coin_data():
    data = DataSource()

    coinInfo = data.get_coin_info("Qwsogvtv82FCd")

    # if no data is found
    if coinInfo.get('status') == 'fail':
        # tell the user that no results were found
        return { "status": 404, "error": "No results found" }

    return { "status": 200, "info": coinInfo["data"] }

# for post of info
@app.route("/postInfo", methods=["POST"])
@cross_origin()
def post_coin_info():
    data = DataSource()
    coinInfo = data.get_coin_info(request.json['uuid'])

    # if no data is found
    if coinInfo.get('status') == 'fail':
        # tell the user that no results were found
        return { "status": 404, "error": "No results found" }
        
    return { "status": 200, "info": coinInfo["data"] }


@app.route("/time", methods=["GET", "POST"])
@cross_origin()
def time_period():
    data = DataSource()
    if request.method == "POST":
        #print(f"{request.json} ")
        price_history = data.get_data_for_coin(uuid, request.json['body'])
        return { "status": 200, "apiData": price_history }
    return {"indices" : ["1", "2", "3", "4"] }

@app.route("/cardselect", methods=["GET", "POST"])
@cross_origin()
def card_select():
    data = DataSource()
    if request.method == "POST":
        print(f"{request.json} ")
        price_history = data.get_data_for_coin(request.json['uuid'], request.json['time'])
        return { "status": 200, "apiData": price_history }
    return {"indices" : ["1", "2", "3", "4"] }



@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__=="__main__":
    app.run()
