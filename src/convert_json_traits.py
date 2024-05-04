jsonFile = 'json11/en_us.json'
import json
newJson = []
with open(jsonFile) as f:
    set6Dict = json.load(f)
    for data1 in set6Dict['setData']:
        dict = data1['traits']
        # print(dict)
        for trait in dict:
            if 'apiName' in trait.keys() and 'name' in trait.keys() and 'TFT11_' in trait['apiName']:
                print(trait['name'])
                trait_cutoffs = []
                for cutoff in trait['effects']:
                    trait_cutoffs.append(cutoff['minUnits'])
                traitDict = {'name': trait['name'], 'cutoffs': trait_cutoffs }
                newJson.append(traitDict)
print(newJson)
with open('json/set11traits.json', 'w') as fout:
    json.dump(newJson, fout)