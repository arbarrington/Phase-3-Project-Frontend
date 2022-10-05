import React, {useState, useEffect} from "react";


//this will have an ul of decisions to vote on

// map users decions through a renderOpenDecisionCard component

export default function DecisionList({username,groupname,matchingDecision}){


    return(
        <div>
            <ul className="list-of-decisions">
                <p> thanks for logging in, buckagroo {username} of {groupname}</p>
                <p> howdy from the ladn of decions lists</p>
                <p> time to decide on some good ol fasioned fun and {matchingDecision}</p>
            </ul>
        </div>


    )
    
}