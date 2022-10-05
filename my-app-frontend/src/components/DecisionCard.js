import React, {useState} from "react";
import { Form } from "react-router-dom";

export default function DecisionCard({options, decision}) {
    const [hasChosenOne, setHasChosenOne] = useState(false)
    const [hasChosenTwo, setHasChosenTwo] = useState(false)
    

    function handleFirstChoice(){
       if (hasChosenOne == true)
        {console.log("you've already chosen one")}
        else {setHasChosenOne(true)
        console.log("first click")}
    }

    function handleSecondChoice(){
        if (hasChosenOne == false) {
            console.log('awaiting first click')
        } else if (hasChosenOne == true && hasChosenTwo == false)
        {console.log("second click")
        setHasChosenTwo(true)}
        else
        {console.log('two choices already made')}
    }

    function rubyDateToMMDDHHMM (date) {
        let formattedDate = `${parseInt(date.split(',')[1])}/${parseInt(date.split(',')[2])} ${parseInt(date.split(',')[3])}:${parseInt(date.split(',')[4])}}`
        return formattedDate
    }

    function displayOptions(optionArray) {
        return (
               optionArray.map((option) => {
                    return (
                        <label>
                        <input   
                        type="radio" 
                        name="answer" 
                        className="radio" 
                        onClick={hasChosenOne ? handleSecondChoice() : handleFirstChoice()}
                        />{option}
                        </label>  
                    )
                }) 
        )
    }
        
    

    return (
        <div className="decisionCard">
            <form>
        <h2 key={decision.id}>Where should {decision.group_name} go for {decision.event_type} on {rubyDateToMMDDHHMM(decision.event_time)}?</h2>
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

