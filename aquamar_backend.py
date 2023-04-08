from flask import Flask, request, jsonify
from flask_cors import CORS

import mysql.connector

app = Flask(__name__)
CORS(app)
mydb = mysql.connector.connect(
    host="localhost",
    user="guiboing",
    password="1Senh@_23",
    database='db_aquamar'
)


@app.route('/produtos-get')
def getLista():
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM produtos")
    produtos= []
    for row in cursor.fetchall():
        produto = {}
        produto['id'] = row[1]
        produto['nome'] = row[2]
        produto['descricao'] = row[3]
        produto['preco'] = row[4]
        produto['quantidade'] = row[5]
        produtos.append(produto)

    return jsonify(produtos)


@app.errorhandler(400)
def bad_request(error):
    return jsonify({'error': 'Bad Request - ' + error.description}), 400


@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({'error': 'Internal Server Error - ' + error.description}), 500


if __name__ == '__main__':
    app.run(host='localhost', port=8000)
