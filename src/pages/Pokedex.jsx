import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { indexApi } from "../api/api";
import Spinner from "../components/Spinner";

export const PokedexContext = createContext();

function Pokedex() {
    const [pokedex, setPokedex] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        return async () => {
            const pokedexData = await indexApi(
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
        <>
            {isLoading ? (
                <div className="h-full">
                    <Spinner />
                </div>
            ) : (
                <section>
                    <PokedexContext.Provider value={{ pokedex, setPokedex }}>
                        <Outlet />
                    </PokedexContext.Provider>
                </section>
            )}
        </>
    );
}

export default Pokedex;
