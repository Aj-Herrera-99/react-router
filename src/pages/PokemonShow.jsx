import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import { showApi } from "../api/api";

function PokemonShow() {
    const [pokemon, setPokemon] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const pokemon = await showApi(
                `${import.meta.env.VITE_POKEDEX_URL}/${id}`,
                null
            );
            pokemon ? setPokemon(pokemon) : navigate("*");
        })();
    }, []);

    return (
        <div className="flex flex-col items-center h-full">
            <h1 className="mt-4 mb-8 text-4xl uppercase">Pokemon #{id}</h1>
            {pokemon && <Card pokemon={pokemon} />}
        </div>
    );
}

export default PokemonShow;
