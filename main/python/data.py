# import du Framework Flask pour Python
from flask import Flask
# import de la librairie JSON pour Python
import json

app = Flask(__name__)

# creation de mes donnees
data = [{'name': 'sylvain', 'age': 29, 'sex': 'h'}, 
        {'name': 'michele', 'age': 20, 'sex': 'f'}, 
        {'name': 'arthur', 'age': 24, 'sex': 'h'}, 
        {'name': 'elise', 'age': 36, 'sex': 'f'}, 
        {'name': 'charly', 'age': 14, 'sex': 'h'}, 
        {'name': 'annie', 'age': 69, 'sex': 'f'}]

# je definie la route sur laquelle je recupere mes donnees
@app.route('/users')

# je definie la fonction qui va retourner mes donnees
def users():
  # j'utilise la fonction json.dumps() pour transformer mes donnees en string JSON
  json_data = json.dumps(data)
  # je retourne mes datas, ainsi que le code de status HTTP
  return json_data, 200

if __name__ == "__main__":
  app.run(threaded=True, debug=True)