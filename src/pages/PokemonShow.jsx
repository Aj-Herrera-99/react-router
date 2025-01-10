import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";

function PokemonShow() {
    const { id } = useParams();
    const navigate = useNavigate();
    // * simulazione pokemon store
    // const [pokemon, setPokemon] = useState({});
    // useEffect(() => {
    //     axios
    //         .get("URL_POKEDEX/id")
    //         .then((res) => setPokemon(res.data))
    //         .catch((err) => console.error(err));
    // }, []);
    const location = useLocation();
    const pokemon = location.state?.pokemon;
    useEffect(() => {
        if (!pokemon) {
            navigate("*");
        }
    }, []);
    return (
        <div className="flex flex-col items-center h-full">
            <h1 className="mt-4 mb-8 text-4xl uppercase">Pokemon #{id}</h1>
            {pokemon && <Card pokemon={pokemon} />}
        </div>
    );
}

export default PokemonShow;
