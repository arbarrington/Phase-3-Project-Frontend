
import React, {useState} from "react";
// import { Form } from "react-router-dom";

export default function DecisionCard({options, decision}) {
    //check yo date
    function rubyDateToMMDDHHMM (date) {
        let formattedDate = `${parseInt(date.split(',')[1])}/${parseInt(date.split(',')[2])} ${parseInt(date.split(',')[3])}:${parseInt(date.split(',')[4])}`
        return formattedDate
    }

    function handleVote(e) {
        console.log(e.target.value)
        console.log(e.target)
    }

    function displayOptions(optionArray) {
        return (
               optionArray.map((option) => {
                    return <div>
                        <label for="name" className="label-ubc">{option.option_name}</label>
                        
                          <input  
                        optID={option.key}
                        decID={decision.id}
                        type="number"
                        max={optionArray.length} 
                        name="answer" 
                        className="radio" 
                        onChange={handleVote}
                        />
                        </div>
                        }))}
                        
                        
                        
        
    return (
        <div className="decisionCard">
            <form>
        <h2 key={decision.id}>Where should {decision.group_name} go for {decision.event_type} on {decision.event_time}?</h2>
            <div className="options">
            <div className="optionList">
                <label className="try">
                { displayOptions(options) }
                </label>
            </div>
            </div>
            <br/>
            </form>
        </div>
    );
}

