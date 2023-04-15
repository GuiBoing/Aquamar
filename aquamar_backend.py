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

# define a função para construir a resposta padronizada


def construct_response(content=None, message=None, status_code=200):
    response = {
        'status': status_code,
        'message': message,
        'content': content
    }
    return jsonify(response), status_code

# rota para listar todos os produtos


@app.route('/produtos')
def get_produtos():
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

    return construct_response(content=produtos,message='produtos listados com sucesso')

# rota para buscar um produto pelo ID


@app.route('/produtos/<int:id>')
def get_produto(id):
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM produtos WHERE id = %s", (id,))
    produto = cursor.fetchone()
    if not produto:
        return construct_response(message='Produto não encontrado', status_code=404)

    produto_dict = {
        'id': produto[0],
        'nome': produto[1],
        'descricao': produto[2],
        'preco': produto[3],
        'quantidade': produto[4]
    }
    return construct_response(content=produto_dict,message='produto listado com sucesso')

# rota para adicionar um produto


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
    return construct_response(message='produto adicionado com sucesso!')

# tratamento de erro para requisições malformadas


@app.errorhandler(400)
def bad_request(error):
    return construct_response(message='Bad Request - ' + error.description, status_code=400)

# tratamento de erro para erros internos do servidor


@app.errorhandler(500)
def internal_server_error(error):
    return construct_response(message='Internal Server Error - ' + error.description, status_code=500)


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=8000)
