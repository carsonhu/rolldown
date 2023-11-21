import React from "react"
import "../index.css"
import SET from "../constants.js"
import { TraitTile } from "./TraitTile.js"

function importAll(r) {
    console.log(r.keys())
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images)
    return images;
}
const images = importAll(require.context('../images', true, /\.(png|jpe?g|svg)$/));

export class TraitMenu extends React.Component {
  constructor(props) {
    // props will give the champion stage so traitmenu can get a counter containing all the traits
    super(props);
    this.state = {
        
    };
  }
  render() {
    var stage = this.props.stage;
    // get unique
    var flags = {}
    var newStage = [];
    for (var index = 0; index < 18; index++){
        var entry = stage[index];
        if (!flags[entry.name]){
            flags[entry.name] = true;
            newStage.push(entry);
        }
    };

    // iterate through champstage
    let traitCounter = {}
    console.log("Champs")
    for (let champ of newStage){
        for (let trait of champ.traits){
            if(!(trait in traitCounter)){
                traitCounter[trait] = 0;   
            }
            traitCounter[trait] += 1;
        }
    }

    // Get an array of the keys:
    let keys = Object.keys(traitCounter);
    // Then sort by using the keys to lookup the values in the original object:
    keys.sort((a, b) => traitCounter[b] - traitCounter[a]);

    for(let key of keys){
        console.log(key, traitCounter[key])
    }

    // get Trait list
    console.log(keys)
    let traitArr = [];
    for (var i = 0; i < Math.min(keys.length, 10); i++){
        // only top 10 traits
        traitArr.push(
            <TraitTile trait={keys[i].toLowerCase().replace("/", "")}
            count={traitCounter[keys[i]]}></TraitTile>
        );
    }

    return (
        <div className="trait-tile-cols">
            {traitArr}
        </div>
    );
  }
}
