import React, { createContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { useOutlet } from "react-router-dom";

import pokedexData from "../data/pokedex.json";

export const PokedexContext = createContext();

function Pokedex() {
    const [pokedex, setPokedex] = useState(pokedexData);

    const outlet = useOutlet();
    return (
        <section>
            {outlet && (
                <PokedexContext.Provider value={{ pokedex, setPokedex }}>
                    {outlet}
                </PokedexContext.Provider>
            )}
        </section>
    );
}

export default Pokedex;
