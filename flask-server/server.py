from flask import Flask, jsonify
import os
from dotenv import load_dotenv
import requests
from flask_cors import CORS


load_dotenv()

app = Flask(__name__)
CORS(app)
API_KEY = os.getenv("WEATHER_API_KEY")
print(API_KEY)
# lay tham số động 
# cái link forecast.json =current.json + forecast
@app.route('/api/forecast/<country>')
def get_forecast(country):
    # Thời tiết hiện tại 
    url = f"http://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={country}&days=7"
    response = requests.get(url)
    return jsonify(response.json())

# @app.route('/api/forecast/<country>')
# def get_forecast(country):
#     # Thời tiết hiện tại 
#     url = f"http://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={country}&days=7"
#     response = requests.get(url)
#     return jsonify(response.json())


if __name__ == "__main__":
    app.run(debug=True)