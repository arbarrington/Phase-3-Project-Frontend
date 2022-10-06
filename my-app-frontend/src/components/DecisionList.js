import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";
import {v4 as uuid} from "uuid";


//this will have an ul of decisions to vote on

// map users decions through a renderOpenDecisionCard component

export default function DecisionList({username, groupname, matchingDecision, fetchResource}){

    const [userFullDecision, setUserFullDecision] = useState([])
    
    
    useEffect(() => {
        let thingsToSet = []
        fetchResource('http://localhost:9292/decisions')
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
  
    // optionArray should be the state variable theseOptions
    let optionArray = [
        {
        key: 1,
        option_name: "opt1",
        num_votes: 0,
        decision_id: 1,
        chosen: false 
        },{
        key: 2,
        option_name: "opt2",
        num_votes: 0,
        decision_id: 1,
        chosen: false 
        },{
        key: 3,
        option_name: "opt3",
        num_votes: 0,
        decision_id: 1,
        chosen: false 
        },{
        key: 4,
        option_name: "opt4",
        num_votes: 0,
        decision_id: 1,
        chosen: false 
        }
         ]
    let decision = [{
        id: 7,
        event_type: "Outdoor",
        decided: false,
        group_name: "Austin",
        event_time: "DateTime.new(2022, 10, 16, 7, 30)",
        decision_deadline: "DateTime.new(2022, 10, 15, 23, 59"
        },{
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
                
               return( <DecisionCard key={uuid()} options={optionArray} decision={d}/> )
            })
            }
            <input id="submitdecision" type="submit" value="Submit!" />
        </div>
    ) 
}

