import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { indexApi } from "../api/api";
import Spinner from "../components/Spinner";

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
                sessionStorage.setItem("limit", "vbosbva");
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
            pokedexData && setPokedex(pokedexData);
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
