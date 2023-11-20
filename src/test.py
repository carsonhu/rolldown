
import os
folder = 'set65images'
splashes = 'images/set65/splash'
traits = 'images/set65/icons'
for count,filename in enumerate(os.listdir(folder)):
    underscoreSplit = filename.split('_')
    #print(underscoreSplit)
    champName = underscoreSplit[1]
    if champName.endswith('.tft'):
        name = champName.split('.')[0]
        os.rename(folder +'/' + filename, splashes + '/' + name + '.png')
    else:
        os.rename(folder +'/' + filename, traits + '/' + champName + '.png')
    # os.rename(folder+'/'+filename, folder+'/'+underscoreSplit[3].split('.')[0]+'.png')