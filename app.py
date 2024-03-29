# imports
from flask import Flask, send_from_directory
import json

app = Flask(__name__, static_url_path="")
# ajoute l'autorisation d'effectuer des requetes pour toutes les origines
# inutile car nous avons tout mis sur le meme serveur
# CORS = CORS(app, resources={r"/*": {"origins": "http://localhost:8000"}})

# creation de mes donnees
data = [
    {"name": "sylvain", "age": 29, "sex": "h"},
    {"name": "michele", "age": 20, "sex": "f"},
    {"name": "arthur", "age": 24, "sex": "h"},
    {"name": "elise", "age": 36, "sex": "f"},
    {"name": "charly", "age": 14, "sex": "h"},
    {"name": "annie", "age": 69, "sex": "f"},
]


@app.route("/js/")
def root():
    return send_from_directory("./", "index.html")


@app.route("/js/<path:path>")
def send_js(path):
    return send_from_directory("./", path)


# je definie la route sur laquelle je recupere mes donnees
@app.route("/users", methods=["GET"])
# je definie la fonction qui va retourner mes donnees
def users():
    # j'utilise la fonction json.dumps() pour transformer mes donnees en string JSON
    json_data = json.dumps(data)
    # je retourne mes datas, ainsi que le code de status HTTP
    return json_data, 200


@app.route("/users/<name>", methods=["GET"])
def user(name):
    # je filtre ma liste d'utilisateur par la cle "name"
    single_user = list(filter(lambda user: user["name"] == name, data))
    # je transforme mon résulat en string
    json_data = json.dumps(single_user)
    print(json_data)
    # je retourne mes données
    return json_data, 200


if __name__ == "__main__":
    app.run(threaded=True, debug=True)
