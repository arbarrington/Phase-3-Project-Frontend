import React, {useState} from "react";

export default function DecisionCard({options, decision}) {

    console.log('options insdie card', options)
    console.log('decs insdie card', decision)

    return (
        <div className="decisionCard">
        </div>
    );
}


        // <div className="decisionCard">
        //     <form>
        // <h2 key={decision.id}>Where should {decision.group_name} go for {decision.event_type} on {decision.event_time}?</h2>
        //     <div className="options">
        //     <ul className="optionList">
        //         <label>
        //         { displayOptions(options) }
        //         </label>
        //     </ul>
        //     </div>
        //     <br/>
        //     </form>
        // </div>

