import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";
import {v4 as uuid} from "uuid";


//this will have an ul of decisions to vote on

// map users decions through a renderOpenDecisionCard component

export default function DecisionList({username,groupname,matchingDecision}){

    console.log("matching decision ids from decision list",matchingDecision)

    return(
        <div>
            <ul className="list-of-decisions">
                <p> thanks for logging in, buckagroo {username} of {groupname}</p>
                <p> howdy from the ladn of decions lists</p>
                {matchingDecision.map(id_num =>
                    <DecisionCard
                        key={uuid()}
                        decisionID={id_num}
                    />
                )}
            </ul>
        </div>


    )
    
}


// allWxData.map((eachCity) =>
//                 <RenderCard
//                     key={uuid()}
//                     weather={eachCity}
//                 />
//             )