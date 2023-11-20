
import React from "react"
import "../index.css"
import KeyListener from "./KeyListener.js"
import sellChampBackground from "../images/sell-champ-background.png"
import { ChampionTile } from "./ChampionTile.js"
import * as Constants from "../constants.js"

export class ChampionMenu extends React.Component {
  render() {
    // let champions = this.props.champions;
    let champions = Constants.championPool;
    console.log(champions)
    let unique1 = champions[1].filter((item, i, ar) => ar.indexOf(item) === i);
    console.log(unique1);
    // One row of 1-costs
    // One row of 2-costs
    // One row of 3-costs
    // One row of 4-costs
    // One row of 5-costs 
    if(this.props.hidden) {
      return null;
    } else {
      return (
        <div className="sell-champ-content">
          <img className="sell-champ-background" src={sellChampBackground}/>
          <div className="keybind-menu row">
          <div className="keybind-menu-text">Keybinds</div>
          
          </div>
        </div>
      );
    }
  }
}
