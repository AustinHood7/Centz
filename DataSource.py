import requests


class DataSource:
    def __init__(self):
        self.url = " "
        self.headers = {
            "X-RapidAPI-Key": "611f5013famsh1fc2f5d32f20cf8p1a2138jsn53b7569f471e",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
        }
        self.querystring = {"referenceCurrencyUuid": "yhjMzLPhuIDl"}

    def get_data_for_top_coins(self):
        """
        Get JSON data from coinranking api for the top 50 coins

        :return: JSON
        """
        self.url = "https://coinranking1.p.rapidapi.com/coins"
        self.querystring = {
            "timePeriod": "24h",
            "tiers[0]": "1", "orderBy": "marketCap", "orderDirection": "desc",
            "limit": "50", "offset": "0"
        }

        response = requests.request("GET", self.url, headers=self.headers,
                                    params=self.querystring)
        return response.json()

    def get_data_for_coin(self, uuid, time):
        """
        Gets the JSON for the last 24 hrs of a  coin
        :param uuid: the specific id set by coinranking for a coin (default bitcoin)
        :param time: the time period set by the user on the graphs page (default 24 hrs)

        :return: JSON
        """
        self.url = f"https://coinranking1.p.rapidapi.com/coin/{uuid}/history?timePeriod={time}"

        response = requests.request("GET", self.url, headers=self.headers,
                                    params=self.querystring)
        return response.json()

    def get_coin_info(self, uuid):
        """
        Gets name, price, etc. for coin in JSON format
        :param uuid: specific id set by coinranking

        :return: JSON
        """
        self.url = f"https://api.coinranking.com/v2/coin/{uuid}"
        response = requests.request("GET", self.url, headers=self.headers,
                                    params=self.querystring)

        return response.json()