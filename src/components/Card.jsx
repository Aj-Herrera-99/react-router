import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RemoveBtn from "./RemoveBtn";
import Spinner from "./Spinner";
import axios from "axios";
import { destroyApi } from "../api/api";

function Card({ pokemon, setPokedex }) {
    const [isLoading, setIsLoading] = useState(true);
    const [imgPath, setImgPath] = useState(null);

    useEffect(() => {
        let resource;
        if (isNaN(pokemon.id)) {
            resource = `/images/placeholder.png`;
        } else {
            resource =
                pokemon.id < 10
                    ? `/images/00${pokemon.id}.png`
                    : pokemon.id < 100
                    ? `/images/0${pokemon.id}.png`
                    : `/images/${pokemon.id}.png`;
        }
        axios
            .get(`${import.meta.env.VITE_POKEDEX_URL}/${resource}`, {
                responseType: "blob",
            })
            .then((res) => {
                const src = URL.createObjectURL(res.data);
                setImgPath(src);
            })
            .catch((err) => {
                setImgPath(`/pokedex/${resource}`);
                err.response
                    ? console.error(err.response.data)
                    : console.error("Errore connessione");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const removeCard = (e) => {
        if (setPokedex) {
            (async () => {
                const pokedexFiltered = await destroyApi(
                    `${import.meta.env.VITE_POKEDEX_URL}/${pokemon.id}`
                );
                pokedexFiltered ? setPokedex(pokedexFiltered) : setPokedex(curr => curr.filter(pkmn => pkmn.id != pokemon.id));
            })();
        }
    };

    return (
        <div className="relative transition-all max-w-[450px]">
            <CardLink pokemon={pokemon}>
                <div className="w-full p-4 h-5/6">
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <img
                            src={imgPath}
                            alt={pokemon.name.english}
                            className="object-contain w-full h-full transition-all"
                        />
                    )}
                </div>
                <span className="text-xl font-light tracking-wider uppercase select-text">
                    {pokemon.name.english}
                </span>
            </CardLink>
            {setPokedex && <RemoveBtn onClick={removeCard} />}
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
