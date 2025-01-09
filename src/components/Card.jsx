import React from "react";
import { NavLink } from "react-router-dom";

function Card({ pokemon, src }) {
    let imgPath;
    if (isNaN(pokemon.id)) {
        imgPath = `/pokedex/images/placeholder.png`;
    } else {
        imgPath =
            pokemon.id < 10
                ? `/pokedex/images/00${pokemon.id}.png`
                : pokemon.id < 100
                ? `/pokedex/images/0${pokemon.id}.png`
                : `/pokedex/images/${pokemon.id}.png`;
    }

    return (
        <CardWrapper pokemon={pokemon} imgPath={imgPath}>
            <div className="w-full p-4 h-5/6">
                <img
                    src={src || imgPath}
                    alt={pokemon.name.english}
                    className="relative object-contain w-full h-full transition-all"
                />
            </div>
            <span className="text-xl font-light tracking-wider uppercase select-text">
                {pokemon.name.english}
            </span>
        </CardWrapper>
    );
}

function CardWrapper({ pokemon, imgPath, children }) {
    return (
        <NavLink
            to={`/pokedex/${pokemon.id}`}
            state={{ pokemon, imgPath }}
            className="relative flex flex-col items-center text-black bg-blue-100 rounded-lg cursor-pointer select-none aspect-square hover:bg-blue-200 [&_img]:hover:scale-[1.3] [&_img]:hover:z-10 transition-all"
        >
            {children}
            {/* <div className="absolute inset-0 bg-black opacity-0 hover:opacity-15"></div> */}
        </NavLink>
    );
}

export default Card;
