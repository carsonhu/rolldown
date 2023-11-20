jsonFile = 'set10raw.json'
import json
newJson = []
with open(jsonFile) as f:
    set6Dict = json.load(f)
    for data1 in set6Dict['setData']:
        dict = data1['champions']
        
        for champ in dict:
            if 'name' in champ.keys() and 'TFT10' in champ['apiName']:
                print(champ['name'])
                print(champ['traits'])
                print(champ['apiName'])
                print(champ['cost'])
                champDict = {'name': champ['name'],
                            'championId' : champ['apiName'],
                            'cost': champ['cost'],
                            'traits': champ['traits']}
                newJson.append(champDict)
print(newJson)
with open('json/set10champions.json', 'w') as fout:
    json.dump(newJson, fout)