import React, {useState, useEffect} from "react";


//this will have an ul of decisions to vote on

// map users decions through a renderOpenDecisionCard component

export default function DecisionList({username,groupname}){


    return(
        <div>
            <ul className="list-of-decisions">
                <p> thanks for logging in, buckagroo {username} of {groupname}</p>
                <p> howdy from the ladn of decions lists</p>
            </ul>
        </div>


    )
    
}