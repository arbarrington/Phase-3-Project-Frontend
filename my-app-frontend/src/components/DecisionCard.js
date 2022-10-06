
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
                    return (
                        <label>
                        <input  
                        optID={option.key}
                        decID={decision.id}
                        type="number"
                        max={optionArray.length} 
                        name="answer" 
                        className="radio" 
<<<<<<< HEAD
                        onChange={handleVote}
                        />{option.option_name}
=======
                        />{option}
>>>>>>> quick-test
                        </label>  
                    )
                }) 
        )
    }
        
    return (
        <div className="decisionCard">
            <form>
        <h2 key={decision.id}>Where should {decision.group_name} go for {decision.event_type} on {decision.event_time}?</h2>
            <div className="options">
            <ul className="optionList">
                <label>
                { displayOptions(options) }
                </label>
            </ul>
            </div>
            <br/>
            </form>
        </div>
    );
}

