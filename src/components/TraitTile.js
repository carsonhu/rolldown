import React from "react"
import "../index.css"
import SET from "../constants.js"

function importAll(r) {
    console.log(r.keys())
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images)
    return images;
}
const images = importAll(require.context('../images', true, /\.(png|jpe?g|svg)$/));

export class TraitTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let traitName = this.props.trait;
    let traitCount = this.props.count;
    let traitImagePath = `set${SET}/traits/` + traitName.replace(" ", "").replace("'", "").toLowerCase() + ".png";
    let traitTilePath = `trait_tile.png`
    let traitTileBackground = `trait_background.png`
    return (
        <div className = "trait-tile">
        <img src={images[traitTilePath]} alt="Trait tile"/>
        <img className="trait-image" src={images[traitImagePath]} alt="trait" />
        <img className="trait-background" src={images[traitTileBackground]} alt="trait background" />
        <p className="d-inline trait-tile-text">
          {traitName}
        </p>
        <div className="trait-num-text">
          {traitCount}
        </div>
        </div>
    );
  }
}
