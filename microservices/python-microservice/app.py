from flask import Flask
app = Flask(__name__)

@app.route('/microservice-message')
def get_message():
    return {'message': 'Hello from the Microservice!'}
