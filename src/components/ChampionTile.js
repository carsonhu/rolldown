import React from "react"
import "../index.css"
import SET from "../constants.js"

function importAll(r) {
    console.log(r.keys())
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log("Images")
    console.log(images)
    return images;
}
const images = importAll(require.context('../images', true, /\.(png|jpe?g|svg)$/));

export class ChampionTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bought: false
    };
  }
  handleMouseOver(e) {
    let champTile = e.target.getElementsByClassName("champ-tile-window")[0];
    let cost = this.props.champion['cost'].toString();
    if(champTile) {
      champTile.src = images["shop-tile/tile-hovered" + cost + ".png"];
    }
  }
  handleMouseLeave(e) {
    let champTile = e.target.getElementsByClassName("champ-tile-window")[0];
    let cost = this.props.champion['cost'].toString();
    if(champTile) {
      champTile.src = images["shop-tile/tile" + cost + ".png"];
    }
  }
  render() {
    let championName = this.props.champion['name'];
    let championCost = this.props.champion['cost'];
    let championImagePath = `set${SET}/splash/` + championName.replace(" ", "").replace("'", "").toLowerCase() + ".png";
    // console.log(championImagePath)
    let championTraits = this.props.champion['traits'];
    let tileImagePath = "shop-tile/tile" + championCost + ".png";
    let traitTexts = [];
    let headlinerImgs = [];
    for(let trait of championTraits) {
      let traitImagePath = `set${SET}/traits/` + trait.toLowerCase().replace(" ", "").replace("-", "").replace("/", "") + ".png";

      // for headliner trait we want to also push a trait icon

      traitTexts.push(
        <div key={trait} className="sm-font">
          <img className="trait-icon" src={images[traitImagePath]} alt="Trait icon" />
          {trait}
        </div>
      );
    }

    let goldElements = championCost ? (
      <div className="d-inline sm-font champ-cost"><img className="d-inline gold-icon-sm" src={images['gold.png']} alt="Gold"/>{championCost}</div>
    ) : "";
    return (
      <div
        className="shop-tile clickable"
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={this.props.onClick}
      >
        <img className="champ-pic" src={images[championImagePath]} alt="Champ pic"/>
        <img className="champ-tile-window" src={images[tileImagePath]} alt="Champ tile"/>
        {headlinerImgs}
        <div className="champ-trait-text">
          {traitTexts}
        </div>
        <div className="champ-tile-text">
          <div className="d-inline sm-font champ-name">{championName}</div>
          {goldElements}
        </div>
      </div>
    );
  }
}
