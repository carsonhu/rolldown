import React from "react"
import "../index.css"
import { ChampionStageTile } from "./ChampionStageTile.js"

export class ChampionStage extends React.Component {
  render() {
    const stage = this.props.stage;
    const championIcons = [];
    for(let i = 0; i < 18; i++) {
      championIcons.push(<ChampionStageTile
        key={i} champion={stage[i]}
        onMouseOver={() => this.props.onMouseOver(i)}
        onMouseLeave={() => this.props.onMouseLeave(i)}
        handleSetDown={() => this.props.handleSetDown(i)}
        dragging={this.props.dragging}/>);
    }
    // let champ2 = [[championIcons.slice(0,9)], [championIcons.slice(9,18)]];
    return (
      <div class="container">
      <div className ="row"
         style={{
          width: '71%',
          bottom: '88%',
          left: '15%',
          position: "absolute",
         }}>
        {championIcons.slice(9,18)}
      </div>
      <div className ="row"
         style={{
          width: '71%',
          bottom: '48%',
          left: '15%',
          position: "absolute",
         }}>
        {championIcons.slice(0,9)}
      </div>
      </div>
      );
  }
}
