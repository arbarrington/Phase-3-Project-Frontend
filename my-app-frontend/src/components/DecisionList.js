import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";
import {v4 as uuid} from "uuid";


//this will have an ul of decisions to vote on

// map users decions through a renderOpenDecisionCard component

export default function DecisionList({username, groupname, matchingDecision}){

    const [userFullDecision, setUserFullDecision] = useState([])
    
    
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
            setUserFullDecision(thingsToSet)
        })
        },[])

    //console.log("some state businet", userFullDecision)






     
    // optionArray should be the state variable theseOptions
    let optionArray = ["option1", "option2", "option3", "option4", "option5"]

  
    return(
        <div>
            {
            userFullDecision.map((d) => {
                
               return( <DecisionCard key={uuid()} options={optionArray} decision={d}/> )
            })
            }
            <input id="submitdecision" type="submit" value="Submit!" />
        </div>
    ) 
}

