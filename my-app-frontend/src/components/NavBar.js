import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";



// ! going to require a nav with many links... really gonna need a good double check to ensure im doing this correct !


export default function NavBar(){

    return(
        <div className="nav-bar">
            <Link to="/CreateNew">Create New Decision Choice</Link>
            <Link to="/FinalDecision"></Link>


        </div>
    )

    
}