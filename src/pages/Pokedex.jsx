import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { getIndex } from "../api/api";
import Spinner from "../components/Spinner";

export const PokedexContext = createContext();

function Pokedex() {
    const [pokedex, setPokedex] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        return async () => {
            const pokedexData = await getIndex(
                import.meta.env.VITE_POKEDEX_URL,
                {
                    params: {
                        limit: 12,
                    },
                }
            );
            setPokedex(pokedexData);
            setIsLoading(false);
        };
    }, []);

    return (
        <section>
            <PokedexContext.Provider value={{ pokedex, setPokedex }}>
                {isLoading ? <Spinner /> : <Outlet />}
            </PokedexContext.Provider>
        </section>
    );
}

export default Pokedex;
