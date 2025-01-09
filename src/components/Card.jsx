import React from "react";

function Card({ pokemon }) {
    let imgPath;
    if (isNaN(pokemon.id)) {
        imgPath = `./pokedex/images/placeholder.png`;
    } else {
        imgPath =
            pokemon.id < 10
                ? `./pokedex/images/00${pokemon.id}.png`
                : pokemon.id < 100
                ? `./pokedex/images/0${pokemon.id}.png`
                : `./pokedex/images/${pokemon.id}.png`;
    }

    return ( 
        <div className="relative flex flex-col items-center p-3 text-black bg-blue-100 rounded-lg select-none aspect-square hover:bg-blue-200">
            <div className="h-full p-4">
                <img
                    src={imgPath}
                    alt={pokemon.name.english}
                    className="object-contain w-full h-full"
                />
            </div>
            <span className="text-xl font-light tracking-wider uppercase select-text">
                {pokemon.name.english}
            </span>
        </div>
    );
}

export default Card;
