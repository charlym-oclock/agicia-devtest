#!/usr/bin/python3

# import de la bibliotheque JSON pour Python
import json

# creation de mes donnees
data = [{'name': 'sylvain', 'age': 29, 'sex': 'h'}, 
        {'name': 'michele', 'age': 20, 'sex': 'f'}, 
        {'name': 'arthur', 'age': 24, 'sex': 'h'}, 
        {'name': 'elise', 'age': 36, 'sex': 'f'}, 
        {'name': 'charly', 'age': 14, 'sex': 'h'}, 
        {'name': 'annie', 'age': 69, 'sex': 'f'}]

# fonction qui va transformer de mes donnees python en json
def json_data():
  python2json = json.dumps(data)
  # print pour verifier que les donnees sont bien retournees
  print(python2json)
# j'execute ma fonction
json_data()

