from flask import Flask
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
from DataSource import DataSource

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

@app.route("/top-coins")
@cross_origin()
def top_coins():
    data_source = DataSource()

    # Get top 50 coins
    return_json = data_source.get_data_for_top_coins()

    # if no coins were found
    if not return_json:
        # tell the user that no results were found
        return { "status": 404, "error": "No results found" }

    return { "status": 200, "coin_data": return_json["data"]["coins"] }

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__=="__main__":
    app.run()
