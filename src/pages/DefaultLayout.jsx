import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <Navbar />
            <main className="overflow-y-scroll text-white bg-slate-800 grow">
                <Outlet />
            </main>
        </>
    );
}

export default DefaultLayout;
