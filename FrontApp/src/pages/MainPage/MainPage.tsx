import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";


const MainPage: React.FC = () => {

    setDarkBgColor();

    return (
        <>
            <Nav/>
            <Outlet/>
        </>
        
    )
}

export default MainPage;

function setDarkBgColor() : void
{
    const bodyEl = document.querySelector<HTMLBodyElement>("body");
    if (bodyEl)
        bodyEl.style.backgroundColor = "#2A2A2A";
    else
        throw new Error("#root not found");
}