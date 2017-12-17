from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route("/test", methods=['GET'])
def apitest():
    print('apitest', request.values.get('query'))
    return "Test OK."

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8000)
