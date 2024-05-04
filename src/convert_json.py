jsonFile = 'json11/en_us.json'
import json
newJson = []
champ_set = set()
with open(jsonFile) as f:
    set6Dict = json.load(f)
    for data1 in set6Dict['setData']:
        dict = data1['champions']
        
        for champ in dict:
            if 'name' in champ.keys() and 'TFT11' in champ['apiName'] and champ['name'] not in champ_set:
                champ_set.add(champ['name'])
                print(champ['name'])
                champDict = {'name': champ['name'],
                            'championId' : champ['apiName'],
                            'cost': champ['cost'],
                            'traits': champ['traits']}
                newJson.append(champDict)
with open('json/set11champions.json', 'w') as fout:
    json.dump(newJson, fout)