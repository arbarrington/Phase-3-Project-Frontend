import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";
import {v4 as uuid} from "uuid";


//this will have an ul of decisions to vote on

// map users decions through a renderOpenDecisionCard component

export default function DecisionList({username,groupname,matchingDecision}){

    console.log("inside decision list",matchingDecision)

    return(
        <div>
            <ul className="list-of-decisions">
                <p> thanks for logging in, buckagroo {username} of {groupname}</p>
                <p> howdy from the ladn of decions lists</p>
                <p> time for some fun and {matchingDecision}</p>
                {matchingDecision.map(element =>
                    <DecisionCard
                        key={uuid()}
                        decisionID={element}
                    />
                )}
            </ul>
        </div>
    ) 
}
