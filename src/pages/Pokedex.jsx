import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { indexApi } from "../api/api";
import Spinner from "../components/Spinner";

import pokedexFallback from "../data/pokedex.json"; //* solo per fallback

export const PokedexContext = createContext();

function Pokedex() {
    const [pokedex, setPokedex] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            let params;
            if (!parseInt(sessionStorage.getItem("firstRender"))) {
                sessionStorage.setItem("firstRender", "1");
                sessionStorage.setItem("start", "");
                sessionStorage.setItem("limit", "");
                let start = parseInt(sessionStorage.getItem("start"));
                let limit = parseInt(sessionStorage.getItem("limit"));
                params = {
                    limit: limit,
                    start: start,
                };
            } else {
                params = null;
            }
            const pokedexData = await indexApi(
                import.meta.env.VITE_POKEDEX_URL,
                {
                    params,
                }
            );
            pokedexData ? setPokedex(pokedexData) : setPokedex(pokedexFallback); //* pokedexFallback
            setIsLoading(false);
        })();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="h-full">
                    <Spinner />
                </div>
            ) : (
                <PokedexContext.Provider value={{ pokedex, setPokedex }}>
                    <Outlet />
                </PokedexContext.Provider>
            )}
        </>
    );
}

export default Pokedex;
