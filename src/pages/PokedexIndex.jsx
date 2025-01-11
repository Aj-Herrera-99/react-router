import React, { useContext } from "react";
import { PokedexContext } from "./Pokedex";
import Card from "../components/Card";

function PokedexIndex() {
    // * simulazione pokedex index
    const { pokedex, setPokedex } = useContext(PokedexContext);

    return (
        <>
            <h1 className="mt-4 mb-8 text-4xl uppercase">pokedex</h1>
            <CardsContainer>
                {pokedex?.map((pokemon) => (
                    <Card
                        key={pokemon.id}
                        pokemon={pokemon}
                        setPokedex={setPokedex}
                    />
                ))}
            </CardsContainer>
        </>
    );
}

function CardsContainer({ children }) {
    return (
        <div className="grid grid-cols-1 gap-6 mx-8 my-4 sm:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    );
}

export default PokedexIndex;
