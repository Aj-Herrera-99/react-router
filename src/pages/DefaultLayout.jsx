import React, { createContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import pokedexData from "../data/pokedex.json";

export const PokedexContext = createContext();

function DefaultLayout() {
    const [pokedex, setPokedex] = useState(pokedexData);
    useEffect(() => {
        console.log("effect");
    }, [pokedex]);
    return (
        <>
            <Navbar />
            <main className="overflow-y-scroll text-white bg-slate-800 grow">
                <PokedexContext.Provider value={{ pokedex, setPokedex }}>
                    <Outlet />
                </PokedexContext.Provider>
            </main>
        </>
    );
}

export default DefaultLayout;
