import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <Navbar />
            <main className="overflow-y-auto bg-blue-500 grow">
                <Outlet />
            </main>
        </>
    );
}

export default DefaultLayout;
