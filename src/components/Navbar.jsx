import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="border-r-2 bg-slate-950 border-r-white">
            <div className="flex flex-col gap-6 [&>a]:p-2 [&>a]:pr-8 [&>a]:border-b-2 [&>a]:text-white [&>a]:text-xl [&>a]:font-light [&>a]:tracking-widest [&>a]:uppercase hover:[&>a]:pb-4 [&>a]:transition-all [&>a]:rounded-md hover:[&>a]:bg-slate-700">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? " bg-slate-600" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/pokedex"
                    className={({ isActive }) =>
                        isActive ? " bg-slate-600" : ""
                    }
                >
                    Pokedex
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? " bg-slate-600" : ""
                    }
                >
                    Chi Siamo
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
