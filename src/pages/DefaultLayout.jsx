import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <Navbar />
            <main className="relative !px-8 overflow-y-scroll text-white bg-slate-800 grow min-h-[100vh]">
                <Outlet />
            </main>
        </>
    );
}

export default DefaultLayout;
