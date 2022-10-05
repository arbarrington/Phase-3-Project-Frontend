import React, {useState} from "react";

export default function DecisionCard({options, decision, numOptions}) {
    const [hasChosenOne, setHasChosenOne] = useState(false)
    const [hasChosenTwo, setHasChosenTwo] = useState(false)
    

    function handleFirstChoice(){
       
        console.log("first click")
        setHasChosenOne(true)
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

    function displayOptions(optionArray, arrayLength) {
        for (var i = 0; i < arrayLength; i++)
        return( <div>
            <label  onClick={hasChosenOne ? handleSecondChoice() : handleFirstChoice()}>
                <input type="radio" name="answer" className="radio-view"/>{optionArray[i]}
            </label>
        </div> 
        )
    }

    return (
        <div className="decisionCard">
            <form>
        <h2 key={decision.id}>Where should {decision.group_name} go for {decision.event_type} on {decision.event_time}?</h2>
            <div className="options">
            <ul className="optionList">
                { displayOptions(options, numOptions) }
            </ul>
            </div>
            <br/>
            </form>
        </div>
    );
}

