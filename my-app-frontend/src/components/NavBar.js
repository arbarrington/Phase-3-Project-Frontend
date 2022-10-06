import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";



// ! going to require a nav with many links... really gonna need a good double check to ensure im doing this correct !


export default function NavBar(){

    return(
        <div className="nav-bar">
            <Link to="/new">Create New Decision Choice</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/final">See Final Decision</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/dec-opts">Decision List</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/list-opt">List Options</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">Home</Link>


        </div>
    )

    
}