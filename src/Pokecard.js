import React from "react";


const PokeCard = function(props) {
    return ( 
        <div>
            <h2>{props.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}></img>
            <p>Type: {props.type}</p>
            <p>EXP: {props.exp}</p>
        </div>
    );
}

export default PokeCard;