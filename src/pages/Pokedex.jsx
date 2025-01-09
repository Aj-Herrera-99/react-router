import React from "react";
import Card from "../components/Card";
import pokedex from "../data/pokedex.json";

function Pokedex() {
    return (
        <section>
            <h1 className="mt-4 mb-8 text-4xl uppercase">pokedex</h1>
            <CardsContainer>
                {pokedex.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </CardsContainer>
        </section>
    );
}

function CardsContainer({ children }) {
    return (
        <div className="grid grid-cols-1 gap-6 mx-8 my-4 sm:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    );
}

export default Pokedex;
