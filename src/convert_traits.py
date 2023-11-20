import os
folder = 'images/set65/traits/'
for count,filename in enumerate(os.listdir(folder)):
    underscoreSplit = filename.split('_')
    os.rename(folder + filename, folder + underscoreSplit[-1])