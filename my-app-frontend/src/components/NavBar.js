import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


export default function NavBar(){

    return(

        <div className="nav-bar">
            <Link to="/new">Create New Decision Choice</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/dec-list">Decision List</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">Log In</Link>
        </div>

    )
    
}