# downloads set 10 data from communitydragon
from pathlib import Path
import glob
import os
import subprocess

set = "11"
patch = "pbe"

icon_path = "images\\set{}/icons".format(set)
splash_path = "images\\set{}/splash".format(set)
trait_path = "images\\set{}/traits".format(set)
json_path = "json{}".format(set)
#set{}raw.json
def make_directory():
    Path(icon_path).mkdir(parents=True, exist_ok=True)
    Path(splash_path).mkdir(parents=True, exist_ok=True)
    Path(trait_path).mkdir(parents=True, exist_ok=True)
    Path(json_path).mkdir(parents=True, exist_ok=True)

def download_data():
    trait_loc = "https://raw.communitydragon.org/{}/game/assets/ux/traiticons/".format(patch, set)
    
    splash_loc = "https://raw.communitydragon.org/{}/game/assets/ux/tft/championsplashes/".format(patch)

    json_loc = "https://raw.communitydragon.org/{}/cdragon/tft/".format(patch)

    make_directory()
    # p = subprocess.Popen(['cmd', '/c', 'cd-dd -o {} {}'.format(trait_path, trait_loc, shell=True, stdout=subprocess.PIPE)])
    # q = subprocess.call(['cmd', '/c', 'cd-dd -o {} {}'.format(splash_path, splash_loc)])
    j = subprocess.call(['cmd', '/c', 'cd-dd -o {} {}'.format(json_path, json_loc)])
    filter_json()

def filter_json():
    files = glob.glob(json_path + "/*")
    for f in files:
        if "en_us.json" not in f:
            os.remove(f)
        
def filter_splashes():
    files = glob.glob(splash_path + "/*")
    # remove all non-set11 images
    non_set = [f for f in files if "tft{}".format(set) not in f]
    for f in non_set:
        os.remove(f)

    # move icons to respective folder
    icons = [f for f in files if "mobile.tft_set{}".format(set) in f]
    for f in icons:
        base_name = os.path.basename(f)
        champ_name = base_name.split('.')[0].split('_')[1]
        os.replace(f, icon_path+"/" + champ_name + ".png")

    # rename all splash files
    files = glob.glob(splash_path + "/*")
    for f in files:
        base_name = os.path.basename(f)
        champ_name = base_name.split('.')[0].split('_')[1]
        os.replace(f, splash_path + "/" + champ_name + ".png")


    # Traits:
    # remove all non-set10 trait images
    trait_files = glob.glob(trait_path + "/*")
    exclusion_keywords = ["tft_set11", "8_duelist", "6_bruiser", "6_sniper", "6_arcanist", "9_preserver"] # exclude spellweaver and guardian
    non_settraits = [f for f in trait_files if not any(n in f for n in exclusion_keywords)]
    for f in non_settraits:
        os.remove(f)

    # rename all trait images
    trait_files = glob.glob(trait_path + "/*")
    for f in trait_files:
        base_name = os.path.basename(f)
        trait_name = base_name.split('.')[0].split('_')[3]
        if trait_name == "ink_shadow":
            trait_name = "inkshadow"
        elif trait_name == "spirit_walker":
            trait_name = "Spirit Walker"
        elif trait_name == "preserver":
            trait_name = "Invoker"
        os.replace(f, trait_path + "/" + trait_name + ".png")
download_data()
# filter_splashes()