import React, { useContext, useEffect, useState } from "react";
import { PokedexContext } from "./Pokedex";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import OrderPokemons from "../components/OrderPokemons";
import GenSelector from "../components/GenSelector";

const chooseGenByFirstId = (firstId) => {
    switch (firstId) {
        case 1:
            return 1;
        case 152:
            return 2;
        case 252:
            return 3;
        case 387:
            return 4;
        case 494:
            return 5;
        case 650:
            return 6;
        case 722:
            return 7;
        default:
            return 1;
    }
};

function PokedexIndex() {
    const { pokedex, setPokedex } = useContext(PokedexContext);
    const [filter, setFilter] = useState("");
    const genSelected = chooseGenByFirstId(parseInt(pokedex[0].id));

    const filteredPokedex = pokedex.filter((pokemon) =>
        pokemon.name.english.toLowerCase().startsWith(filter.toLowerCase())
    );

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <>
            <h1 className="mt-4 mb-8 text-4xl uppercase">pokedex</h1>
            <section className="flex flex-wrap items-center justify-center gap-6 sm:justify-start">
                <GenSelector genSelected={genSelected} />
                <div className="flex items-center gap-4">
                    <SearchBar onChange={handleFilterChange} filter={filter} />
                    <OrderPokemons setPokedex={setPokedex} />
                </div>
            </section>
            <CardsContainer>
                {filteredPokedex?.map((pokemon) => (
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
        <div className="grid grid-cols-1 gap-10 my-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    );
}

export default PokedexIndex;
