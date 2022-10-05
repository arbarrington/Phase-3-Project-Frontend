import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";


//this will have an ul of decisions to vote on

// map users decions through a renderOpenDecisionCard component

export default function DecisionList({username,groupname}){
    // optionArray should be the state variable theseOptions
    let optionArray = ["option1", "option2", "option3", "option4"]
    let decision = [{
        event_type: "Outdoor activities",
        decided: false,
        group_name: "Shelby, Jake, and Austin",
        event_time: "DateTime.new(2022, 10, 16, 7)",
        decision_deadline: "DateTime.new(2022, 10, 15, 23, 59"
        }]

    let count = 0
    return(
        <div>
            <ul className="list-of-decisions">
            {
            decision.map((d) => {
                let numOptions = count +1;
                count++;
               return( <DecisionCard key={decision.id} options={optionArray} numOptions={numOptions} decision={d}/> )
            })
            }
            </ul>
        </div>


    )
    
}