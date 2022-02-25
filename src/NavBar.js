import React from "react";
import {NavLink} from "react-router-dom/cjs/react-router-dom.min";

function NavBar(){
    return (
        <div style={{display:"flex", flexDirection: "column", marginTop: "1rem"}} align="center">
        <NavLink to="/form">
            Add a New Car!
        </NavLink>
        <NavLink to="/founders">
            Meet the Brand Founders
        </NavLink>
        <NavLink to="home">
            Home page
        </NavLink>
        </div>
    )
}

export default NavBar;