
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import React from "react";
import { Outlet } from "react-router-dom";

// Outlet is used to dynamically pass the DOM's 
// Here it taken "Header & Footer" as base that will remain same throughout
// And the passed DOM's in the <Outlet /> through index file will only change dynamically

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;