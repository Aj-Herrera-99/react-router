import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "../components/Card";

function PokemonDetail() {
    const { id } = useParams();
    const location = useLocation();
    const pokemon = location.state.pokemon;
    const imgPath = location.state.imgPath;
    console.log(location.state);
    return (
        <div className="flex flex-col items-center h-full">
            <h1 className="mt-4 mb-8 text-4xl uppercase">Pokemon #{id}</h1>
            <Card pokemon={pokemon} src={imgPath} />
        </div>
    );
}

export default PokemonDetail;
