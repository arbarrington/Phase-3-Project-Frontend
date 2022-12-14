import React, {useState, useEffect} from "react";
import {v4 as uuid} from "uuid";

export default function DecisionCard({options, decision, currentGroup, handleDelete, handlePatch}) {

    // state to show only the options that belong to the specific dec that is currently being rendered
    const [thisDecOpts, setThisDecOpts] = useState([])
    const [thisDecOpen, setThisDecOpen] = useState(true)
    const [chosenOpt, setChosenOpt] = useState({})

    useEffect(() => {
        let goodOpts = []
        options.forEach((opt) => {
            if (opt.decision_id == decision.id){
                goodOpts.push(opt)
            }
        })
        setThisDecOpts(goodOpts)
    },[])

    function handlePatch(opt) {
        
        setChosenOpt(() => opt)
        setThisDecOpen(() => false)

        // need to figure out how to get right dec causse it's in an individsual card but they're all rendered
        const optPatch = {
            option_name: opt.option_name,
            num_votes: 1,
            decision_id: opt.decion_id,
            chosen: true
        }

        fetch(`http://localhost:9292/option/${opt.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(optPatch)
        })


    }

    // each optoin gets rendered as a button but I was too lazy to add any functinality to the buttons!
    // but it might be easy to add the voting logic if each option is just a button wiht like a hanndle onClick fucntion to patch/post

    // also maybe a terenary to change the rendering if the decided value of decion is true

    return (
        <div className="decisionCard">
            {thisDecOpen > 0 ?
                <div>
                    <p>Vote on {decision.event_type} for {currentGroup} </p>
                    {thisDecOpts.map((opt) => 
                        <div key={uuid()}>
                            <button onClick={() => handlePatch(opt)}>
                                {/* maybe add some functionality to the button so they click here and then that posts this optins as chosen?? */}
                                {opt.option_name}
                            </button>
                            {/* <input type='checkbox' onChecked={(opt) => handlePatch(opt)}/> */}
                        </div>
                    )}
                        <button
                        onClick={handleDelete}>
                        delete this decision
                        </button>
                </div>
            :
             <p>
                {decision.event_type} has been decided!
                <br/>
                {decision.group_name} is going to go with {chosenOpt.option_name}
            </p>
             
            }
        </div>
    );
}


