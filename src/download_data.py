# downloads set 10 data from communitydragon
from pathlib import Path
import glob
import os
import subprocess

set = "10"
patch = "pbe"

icon_path = "images\\set{}/icons".format(set)
splash_path = "images\\set{}/splash".format(set)
trait_path = "images\\set{}/traits".format(set)
json_path = "set{}raw.json".format(set)
def make_directory():
    Path(icon_path).mkdir(parents=True, exist_ok=True)
    Path(splash_path).mkdir(parents=True, exist_ok=True)
    Path(trait_path).mkdir(parents=True, exist_ok=True)

def download_data():
    trait_loc = "https://raw.communitydragon.org/{}/game/assets/ux/traiticons/".format(patch, set)
    
    splash_loc = "https://raw.communitydragon.org/{}/game/assets/ux/tft/championsplashes/".format(patch)

    json_loc = "https://raw.communitydragon.org/{}/cdragon/tft/en_us.json".format(patch)

    make_directory()
    p = subprocess.Popen(['cmd', '/c', 'cd-dd -o {} {}'.format(trait_path, trait_loc, shell=True, stdout=subprocess.PIPE)])

    # q = subprocess.call(['cmd', '/c', 'cd-dd -o {} {}'.format(splash_path, splash_loc)])
    # j = subprocess.call(['cmd', '/c', 'cd-dd -o {} {}'.format(json_path, json_loc)])

def filter_splashes():
    # files = glob.glob(splash_path + "/*")
    # # remove all non-set10 images
    # non_set10 = [f for f in files if "tft10" not in f]
    # for f in non_set10:
    #     os.remove(f)

    # # move icons to respective folder
    # icons = [f for f in files if "mobile.tft_set10" in f]
    # for f in icons:
    #     base_name = os.path.basename(f)
    #     champ_name = base_name.split('.')[0].split('_')[1]
    #     os.replace(f, icon_path+"/" + champ_name + ".png")

    # # rename all splash files
    # files = glob.glob(splash_path + "/*")
    # for f in files:
    #     base_name = os.path.basename(f)
    #     champ_name = base_name.split('.')[0].split('_')[1]
    #     os.replace(f, splash_path + "/" + champ_name + ".png")


    # Traits:
    # remove all non-set10 trait images
    trait_files = glob.glob(trait_path + "/*")
    exclusion_keywords = ["set10", "5_sorcerer", "7_guardian"] # exclude spellweaver and guardian
    non_set10traits = [f for f in trait_files if not any(n in f for n in exclusion_keywords)]
    for f in non_set10traits:
        os.remove(f)

    # rename all trait images
    trait_files = glob.glob(trait_path + "/*")
    for f in trait_files:
        base_name = os.path.basename(f)
        trait_name = base_name.split('.')[0].split('_')[3]
        if trait_name == "bigsad":
            trait_name = "emo"
        elif trait_name == "warden":
            trait_name = "sentinel"
        elif trait_name == "dj":
            trait_name = "Mixmaster"
        elif "5_sorcerer" in trait_name:
            trait_name = "Spellweaver"
        elif "7_guardian" in trait_name:
            trait_name = "Guardian"
        os.replace(f, trait_path + "/" + trait_name + ".png")
# download_data()
filter_splashes()