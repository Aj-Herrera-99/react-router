import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

import pokedexData from "../data/pokedex.json";

export const PokedexContext = createContext();

function Pokedex() {
    const [pokedex, setPokedex] = useState(pokedexData);

    return (
        <section>
            <PokedexContext.Provider value={{ pokedex, setPokedex }}>
                <Outlet />
            </PokedexContext.Provider>
        </section>
    );
}

export default Pokedex;
