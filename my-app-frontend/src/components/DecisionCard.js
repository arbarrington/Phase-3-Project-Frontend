import React, {useState} from "react";

export default function DecisionCard({options, decision, numOptions}) {
    const [hasChosenOne, setHasChosenOne] = useState(false)
    const [hasChosenTwo, setHasChosenTwo] = useState(false)
    

    function handleFirstChoice(e){
        e.preventDefault()
        console.log("first click")
        setHasChosenOne(true)
    }
    function handleSecondChoice(e){
        e.preventDefault()  
        console.log("second click")
        setHasChosenTwo(true)
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
        <h2 key={decision.id}>Where should {decision.group_name} go for {decision.decision_type} on {decision.event_time}?</h2>
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

