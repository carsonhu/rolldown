
import os
folder = 'images/set6/traits'
for count,filename in enumerate(os.listdir(folder)):
    underscoreSplit = filename.split('_')
    print(underscoreSplit[3])
    os.rename(folder+'/'+filename, folder+'/'+underscoreSplit[3].split('.')[0]+'.png')