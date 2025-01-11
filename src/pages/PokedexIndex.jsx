import React, { useContext, useState } from "react";
import { PokedexContext } from "./Pokedex";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import OrderPokemons from "../components/OrderPokemons";

function PokedexIndex() {
    const { pokedex, setPokedex } = useContext(PokedexContext);
    const [filter, setFilter] = useState("");

    const filteredPokedex = pokedex.filter((pokemon) =>
        pokemon.name.english.toLowerCase().startsWith(filter.toLowerCase())
    );

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <>
            <h1 className="mt-4 mb-8 text-4xl uppercase">pokedex</h1>
            <section className="flex items-center gap-6">
                <SearchBar onChange={handleFilterChange} filter={filter} />
                <OrderPokemons setPokedex={setPokedex} />
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
        <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    );
}

export default PokedexIndex;
