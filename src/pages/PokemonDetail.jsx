import React from "react";
import { useParams } from "react-router-dom";

function PokemonDetail() {
    const { id } = useParams();
    return (
        <div>
            <span>PokemonDetail {id}</span>
        </div>
    );
}

export default PokemonDetail;
