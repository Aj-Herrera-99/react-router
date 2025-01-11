import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const appLinks = [
    { to: "/", label: "Home" },
    { to: "/pokedex", label: "List" },
    { to: "/pokedex/store", label: "Create" },
    { to: "/about", label: "Chi Siamo" },
];

function Navbar() {
    const [isPokedexOpen, setIsPokedexOpen] = useState(false);
    const [view, setView] = useState(false);
    const navElClass =
        "p-2 border-b-2 text-white text-xl font-light tracking-widest uppercase hover:pb-4 transition-all rounded-md hover:bg-slate-800 cursor-pointer";

    const mobileView = window.matchMedia("(max-width: 640px)");
    mobileView.addEventListener("change", function () {
        this.matches ? setView(false) : setView(true);
    });

    useEffect(() => {
        window.innerWidth < 640 ? setView(false) : setView(true);
    }, []);
    return (
        <>
            <i
                class={`${
                    view && "hidden"
                } fa-solid fa-bars absolute top-0 left-0 text-white z-20 text-3xl cursor-pointer`}
            ></i>
            <nav
                className={`${
                    !view && "absolute hidden"
                } z-10 top-0 left-0 bottom-0  border-r-2 bg-slate-950 border-r-white min-w-[200px]`}
            >
                <div className="flex flex-col gap-6">
                    {appLinks
                        .filter((link) => !link.to.includes("pokedex"))
                        .map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.to}
                                className={({ isActive }) =>
                                    navElClass +
                                    (isActive ? " bg-slate-600" : "")
                                }
                            >
                                <span>{link.label}</span>
                                <span>
                                    {link.label === "pokedex" && "ciao"}
                                </span>
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
                                    .filter((link) =>
                                        link.to.includes("pokedex")
                                    )
                                    .map((link, index) => (
                                        <NavLink
                                            end={true}
                                            key={index}
                                            to={link.to}
                                            className={({ isActive }) =>
                                                `${navElClass} self-end w-11/12 capitalize` +
                                                (isActive
                                                    ? " bg-slate-600"
                                                    : "")
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
        </>
    );
}

export default Navbar;
