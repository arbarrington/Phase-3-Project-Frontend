import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";


//this will have an ul of decisions to vote on

// map users decions through a renderOpenDecisionCard component

export default function DecisionList({username,groupname}){
    // optionArray should be the state variable theseOptions
    let optionArray = ["option1", "option2", "option3", "option4", "option5"]
    let decision = [{
        id: 7,
        event_type: "Outdoor activities",
        decided: false,
        group_name: "Shelby, Jake, and Austin",
        event_time: "DateTime.new(2022, 10, 16, 7, 30)",
        decision_deadline: "DateTime.new(2022, 10, 15, 23, 59"
        },
        {
        id: 8,
        event_type: "Happy Hour",
        decided: false,
        group_name: "Phase 3",
        event_time: "DateTime.new(2022, 10, 28, 18, 00)",
        decision_deadline: "DateTime.new(2022, 10, 15, 23, 59"
            }]

  
    return(
        <div>
            {
            decision.map((d) => {
                
               return( <DecisionCard key={decision.id} options={optionArray} decision={d}/> )
            })
            }
            <input id="submitdecision" type="submit" value="Submit!" />
        </div>


    )
    
}