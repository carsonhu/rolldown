from bs4 import BeautifulSoup
import requests

url = 'https://raw.communitydragon.org/12.23/game/assets/ux/tft/championsplashes/'
ext = ''

def listFD(url, ext=''):
    page = requests.get(url).text
    print(page)
    soup = BeautifulSoup(page, 'html.parser')
    for node in soup.find_all('a'):
        if 'href' in node:
            print(node.get('href'))
    #return [url + '/' + node.get('href') for node in soup.find_all('a')]

listFD(url)

# for file in listFD(url, ext):
#     print(file)