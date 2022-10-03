from flask import Flask
from DataSource import DataSource

app = Flask(__name__)

# Members api route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/top-coins")
def top_coins():
    data_source = DataSource()

    # Get top 50 coins
    return_json = data_source.get_data_for_top_coins()

    # if no coins were found
    if not return_json:
        # tell the user that no results were found
        return { "status": 404, "error": "No results found" }

    return { "status": 200, "coin_data": return_json["data"]["coins"] }

if __name__=="__main__":
    app.run(debug=True)