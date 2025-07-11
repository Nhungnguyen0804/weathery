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
@app.route('/weather')
def create_local_api():
    url = f"http://api.weatherapi.com/v1/current.json?key={API_KEY}&q=Vietnam"
    response = requests.get(url)
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(debug=True)