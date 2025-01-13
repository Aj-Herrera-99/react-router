import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import OrderPokemons from "../components/OrderPokemons";
import GenSelector from "../components/GenSelector";
import { indexApi } from "../api/api";
import PokedexContext from "../contexts/PokedexContext";

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
    const [hasMore, setHasMore] = useState(true);
    const genSelected = chooseGenByFirstId(parseInt(pokedex[0].id));

    let filteredPokedex = pokedex.filter((pokemon) =>
        pokemon.name.english.toLowerCase().startsWith(filter.toLowerCase())
    );

    const fetchMorePokemon = async () => {
        if (filteredPokedex.length >= 151) {
            setHasMore(false);
        } else {
            let params = {
                start: filteredPokedex.length,
                limit: filteredPokedex.length + 30,
            };
            const morePokemons = await indexApi(
                import.meta.env.VITE_POKEDEX_URL,
                {
                    params,
                }
            );
            if (morePokemons) {
                filteredPokedex = filteredPokedex.concat(morePokemons);
                if (filteredPokedex.length > 151) {
                    filteredPokedex = filteredPokedex.slice(0, 151);
                }
                setPokedex(filteredPokedex);
            }
        }
    };

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
            <InfiniteScroll
                dataLength={filteredPokedex.length}
                hasMore={hasMore}
                next={fetchMorePokemon}
                loader={<p className="w-full">Loading...</p>}
                scrollableTarget="parentScrollDiv"
                className="grid h-full grid-cols-1 gap-10 my-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
                {filteredPokedex?.map((pokemon) => (
                    <Card
                        key={pokemon.id}
                        pokemon={pokemon}
                        setPokedex={setPokedex}
                    />
                ))}
            </InfiniteScroll>
        </>
    );
}

export default PokedexIndex;
