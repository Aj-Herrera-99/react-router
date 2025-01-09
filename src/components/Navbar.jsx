import React from "react";
import { NavLink } from "react-router-dom";

const appLinks = [
    { to: "/", label: "Home" },
    { to: "/pokedex", label: "Pokedex" },
    { to: "/about", label: "Chi Siamo" },
];

function Navbar() {
    return (
        <nav className="border-r-2 bg-slate-950 border-r-white sm:min-w-[200px]">
            <div className="flex flex-col gap-6 [&>a]:p-2 [&>a]:pr-8 [&>a]:border-b-2 [&>a]:text-white [&>a]:text-xl [&>a]:font-light [&>a]:tracking-widest [&>a]:uppercase hover:[&>a]:pb-4 [&>a]:transition-all [&>a]:rounded-md hover:[&>a]:bg-slate-700">
                {appLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.to}
                        className={({ isActive }) =>
                            isActive ? " bg-slate-600" : ""
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
