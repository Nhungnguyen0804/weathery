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
@app.route('/api/weather/<country>')
def get_weather(country):
    url = f"http://api.weatherapi.com/v1/current.json?key={API_KEY}&q={country}"
    response = requests.get(url)
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(debug=True)