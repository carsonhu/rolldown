import React from "react"
import "../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'

export function ChampionButton(props) {
  return (
    <FontAwesomeIcon icon={faJedi}
      className="champ-button clickable"
      onClick={props.onClick}/>
  );
}

        
        