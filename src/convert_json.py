jsonFile = 'set6raw.json'
import json
newJson = []
with open(jsonFile) as f:
    set6Dict = json.load(f)
    for champ in set6Dict['setData'][11]['champions']:
        if 'name' in champ.keys():
            print(champ['name'])
            print(champ['traits'])
            print(champ['apiName'])
            print(champ['cost'])
            champDict = {'name': champ['name'],
                        'championId' : champ['apiName'],
                        'cost': champ['cost'],
                        'traits': champ['traits']}
            newJson.append(champDict)
with open('set6champions.json', 'w') as fout:
    json.dump(newJson, fout)
            
    # for trait in set6Dict['setData'][11]['traits']:
    #     print(trait)