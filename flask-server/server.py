from flask import Flask

app = Flask(__name__)

@app.route('/weather')
def create_local_api():
    return 'hello'

if __name__ == "__main__":
    app.run(debug=True)