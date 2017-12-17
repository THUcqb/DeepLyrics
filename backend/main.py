from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route("/test", methods=['GET'])
def apitest():
    app.logger.info('apitest, ' + request.values.get('query'))
    return "Test OK."

@app.route("/word2word", methods=['GET'])
def word2word():
    app.logger.info('word2word, ' + request.values.get('query'))
    return "TODO word2word"

@app.route("/word2sentence", methods=['GET'])
def word2sentence():
    app.logger.info('word2sentence, ' + request.values.get('query'))
    return "TODO word2sentence"

@app.route("/sentence2sentence", methods=['GET'])
def sentence2sentence():
    app.logger.info('sentence2sentence, ' + request.values.get('query'))
    return "TODO sentence2sentence"

@app.route("/sentence2piece", methods=['GET'])
def sentence2piece():
    app.logger.info('sentence2piece, ' + request.values.get('query'))
    return "TODO sentence2piece"

from extractor import SimpleExtractor
from generator import SimpleGenerator
@app.route("/piece2piece", methods=['GET'])
def piece2piece():
    query = request.values.get('query')
    app.logger.info('piece2piece, ' + repr(query))
    conditions = SimpleExtractor(query).get()
    generated = SimpleGenerator(conditions).get()
    return generated

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8000, debug=True)
