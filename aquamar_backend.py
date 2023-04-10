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


@app.route('/produtos')
def getProdutos():
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM produtos")
    produtos = []
    for row in cursor.fetchall():
        produto = {}
        produto['id'] = row[0]
        produto['nome'] = row[1]
        produto['descricao'] = row[2]
        produto['preco'] = row[3]
        produto['quantidade'] = row[4]
        produtos.append(produto)

    return jsonify(produtos)


@app.route('/add-produtos', methods=['POST'])
def adicionar_produto():
    mycursor = mydb.cursor()
    sql = "INSERT INTO produtos (nome, descricao, preco, quantidade) VALUES (%s, %s, %s, %s)"
    val = (
        request.json['nome'],
        request.json['descricao'],
        request.json['preco'],
        request.json['quantidade']
    )
    mycursor.execute(sql, val)
    mydb.commit()

    return jsonify({'mensagem': 'Cliente adicionado com sucesso!'})


@app.errorhandler(400)
def bad_request(error):
    return jsonify({'error': 'Bad Request - ' + error.description}), 400


@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({'error': 'Internal Server Error - ' + error.description}), 500


if __name__ == '__main__':
    app.run(debug=True,host='localhost', port=8000)
