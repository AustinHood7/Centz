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
        :param uuid: the specific id set by coinranking for a coin
        :return: JSON
        """
        self.url = f"https://coinranking1.p.rapidapi.com/coin/{uuid}/history?timePeriod={time}"

        response = requests.request("GET", self.url, headers=self.headers,
                                    params=self.querystring)
        return response.json()

    def getCoinInfo(self, uuid):
        """
        Gets name, price, etc. for coin in JSON format
        :param uuid: specific id set by coinranking
        :return: JSON
        """
        self.url = f"https://api.coinranking.com/v2/coin/{uuid}"
        response = requests.request("GET", self.url, headers=self.headers,
                                    params=self.querystring)

        return response.json()
        
    def search_for_coin(self, query):
        """
        Finds any coins that have a similar name to the passed query
        :param query: search query like "bitcoin"
        :return: JSON
        """
        query = query.replace(' ', '+')
        self.url = f"https://api.coinranking.com/v2/search-suggestions?query={query} "

        response = requests.request("GET", self.url, headers=self.headers,
                                    params=self.querystring)
        return response.json()