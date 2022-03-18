import React from "react";
import PokeCard from "./Pokecard";

function Pokedex(props) {
    return(
        <div>
            <h2>Pokedex</h2>
            <div>
                {props.pokemon.map(p => (
                    <PokeCard
                     id={p.id}
                     name={p.name}
                     type={p.type}
                     exp={p.base_experience}
                     />
                ))}
            </div>
        </div>
    )
}



export default Pokedex;