
import React, {useState} from "react";
// import { Form } from "react-router-dom";

export default function DecisionCard({options, decision}) {
    //check yo date

    console.log('options insdie dec card',options)
    console.log(decision)
    
    function handleVote(e) {
        console.log(e.target.id)
        console.log(e.target)
        fetch(`http://localhost:9292/options/${3}`,{method: 'PATCH',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({num_votes: e.target.value})})
        .then(res => res.json())
    }
    function displayOptions(optionArray) {
        return (
               optionArray.map((option) => {
                    if (option.decision_id == decision.id) {
                        return (
                            <label>
                            <input
                            id={decision.id}
                            type="number"
                            max={optionArray.length}
                            name="answer"
                            className="radio"
                            onChange={handleVote}
                            />{option.option_name}
                            </label>
                        )
                    }
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

