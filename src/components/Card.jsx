import React from "react";
import { Link } from "react-router-dom";
import RemoveBtn from "./RemoveBtn";

function Card({ pokemon, setPokedex }) {
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

    const removeCard = (e) => {
        setPokedex((curr) => {
            const newPokedex = curr.filter((pkmn) => pkmn.id != pokemon.id);
            return newPokedex;
        });
        // axios
        //     .delete(`${apiURL}/${pokemon.id}`)
        //     .then((res) => {
        //         setPokedex(res.data);
        //     })
        //     .catch((err) => console.error(err.response.data));
    };

    return (
        <div className="relative transition-all max-w-[450px]">
            <CardLink pokemon={pokemon}>
                <div className="w-full p-4 h-5/6">
                    <img
                        src={imgPath}
                        alt={pokemon.name.english}
                        className="object-contain w-full h-full transition-all"
                    />
                </div>
                <span className="text-xl font-light tracking-wider uppercase select-text">
                    {pokemon.name.english}
                </span>
            </CardLink>
            <RemoveBtn onClick={removeCard} />
        </div>
    );
}

function CardLink({ pokemon, children }) {
    return (
        <Link
            to={`/pokedex/${pokemon.id}`}
            state={{ pokemon }}
            className="flex flex-col items-center text-black bg-blue-100 rounded-lg cursor-pointer select-none aspect-square hover:bg-blue-200 [&_img]:hover:scale-[1.1] [&_img]:hover:z-10"
        >
            {children}
        </Link>
    );
}

export default Card;
