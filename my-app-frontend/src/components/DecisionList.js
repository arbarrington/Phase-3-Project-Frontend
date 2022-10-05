import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";
import {v4 as uuid} from "uuid";


//this will have an ul of decisions to vote on

// map users decions through a renderOpenDecisionCard component

export default function DecisionList({username, groupname, matchingDecision}){

    const [someStateBusniess, setSomeStateBusiness] = useState([])
    
    
    useEffect(() => {
        let thingsToSet = []
        fetch('http://localhost:9292/decisions')
        .then((d) => d.json())
        .then((d) => {
            matchingDecision.forEach((id_num) => {
                d.forEach((entry) => {
                    if (entry.id == id_num) {
                        thingsToSet.push(entry)
                    }
                })
            })
            setSomeStateBusiness(thingsToSet)
        })
        },[])

    console.log("some state busines",someStateBusniess)






    return (
        <div>
            <ul className="list-of-decisions">
                <p> thanks for logging in, buckagroo {username} of {groupname}</p>
                <p> howdy from the ladn of decions lists</p>
                <p> time for some fun and {matchingDecision}</p>
                {someStateBusniess.map(element =>
                    <DecisionCard
                        key={uuid()}
                        decisionID={element.id}
                    />
                )}
            </ul>
        </div>
    ) 
}

