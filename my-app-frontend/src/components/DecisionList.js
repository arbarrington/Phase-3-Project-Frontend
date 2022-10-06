import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";
import {v4 as uuid} from "uuid";

export default function DecisionList({username, groupname, matchingDecision }){

    const [userFullDecision, setUserFullDecision] = useState([])
    
    useEffect(() => {
        let thingsToSet = []
        fetch('http://localhost:9292/decisions')
            .then(d => d.json())
            .then((d) => {
                matchingDecision.forEach((id_num) => {
                d.forEach((entry) => {
                    if (entry.id == id_num) {
                        thingsToSet.push(entry)
                    }
                })
            })
            setUserFullDecision(thingsToSet)
        })
        },[])

    console.log("some state businet", userFullDecision)

    


    return(
        <div>   
            {/* {decision.map((d) => {
                <DecisionCard key={uuid()} options={optionArray} decision={d}/>
            })}
            <input id="submitdecision" type="submit" value="Submit!" /> */}
        </div>
    ) 
}

