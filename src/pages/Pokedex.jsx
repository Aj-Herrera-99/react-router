import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import pokedexData from "../data/pokedex.json";

export const PokedexContext = createContext();

function Pokedex() {
    const [pokedex, setPokedex] = useState(pokedexData);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <section>
            <PokedexContext.Provider
                value={{ pokedex, setPokedex, isLoading, setIsLoading }}
            >
                <Outlet />
            </PokedexContext.Provider>
        </section>
    );
}

export default Pokedex;
