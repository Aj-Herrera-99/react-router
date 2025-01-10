import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const appLinks = [
    { to: "/", label: "Home" },
    { to: "/pokedex", label: "List" },
    { to: "/pokedex/store", label: "Create" },
    { to: "/about", label: "Chi Siamo" },
];

function Navbar() {
    const [isPokedexOpen, setIsPokedexOpen] = useState(false);
    const navElClass =
        "p-2 border-b-2 text-white text-xl font-light tracking-widest uppercase hover:pb-4 transition-all rounded-md hover:bg-slate-700 cursor-pointer";
    return (
        <nav className="border-r-2 bg-slate-950 border-r-white sm:min-w-[200px]">
            <div className="flex flex-col gap-6">
                {appLinks
                    .filter((link) => !link.to.includes("pokedex"))
                    .map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            className={({ isActive }) =>
                                navElClass + (isActive ? " bg-slate-600" : "")
                            }
                        >
                            <span>{link.label}</span>
                            <span>{link.label === "pokedex" && "ciao"}</span>
                        </NavLink>
                    ))}
                <div
                    onMouseEnter={() => setIsPokedexOpen((curr) => !curr)}
                    onMouseLeave={() => setIsPokedexOpen((curr) => !curr)}
                >
                    <div
                        className={`${navElClass} flex items-center justify-between`}
                    >
                        <span>Pokedex</span>
                        <i
                            className={`fa-solid fa-angle-down transition-all ${
                                isPokedexOpen && "rotate-180"
                            }`}
                        ></i>
                    </div>
                    {isPokedexOpen && (
                        <div className={`flex flex-col gap-2 my-2`}>
                            {appLinks
                                .filter((link) => link.to.includes("pokedex"))
                                .map((link, index) => (
                                    <NavLink
                                        end={true}
                                        key={index}
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `${navElClass} self-end w-11/12` +
                                            (isActive ? " bg-slate-600" : "")
                                        }
                                    >
                                        <span>{link.label}</span>
                                    </NavLink>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
