import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";



// ! going to require a nav with many links... really gonna need a good double check to ensure im doing this correct !


export default function NavBar(){

    return(
        <div className="nav-bar">
            <Link className="navCN" to="/new">Create New Decision Choice</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="navCN" to="/final">See Final Decision</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="navCN" to="/dec-list">Decision List</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="navCN" to="/list-opt">List Options</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="navCN" to="/">Home</Link>


        </div>
    )

    
}