import React, {useState, useEffect} from "react";
import {v4 as uuid} from "uuid";

export default function DecisionCard({options, decision, currentGroup}) {

    // state to show only the options that belong to the specific dec that is currently being rendered
    const [thisDecOpts, setThisDecOpts] = useState([])

    useEffect(() => {
        let goodOpts = []
        options.forEach((opt) => {
            if (opt.decision_id == decision.id){
                goodOpts.push(opt)
            }
        })
        setThisDecOpts(goodOpts)
    },[])

    // each optoin gets rendered as a button but I was too lazy to add any functinality to the buttons!
    // but it might be easy to add the voting logic if each option is just a button wiht like a hanndle onClick fucntion to patch/post

    return (
        <div className="decisionCard">
            {thisDecOpts.length > 0 ?
                <div>
                    <p>Vote on {decision.event_type} for {currentGroup} </p>
                    {thisDecOpts.map((opt) => 
                        <div key={uuid()}>
                            <button>
                                {/* maybe add some functionality to the button so they click here and then that posts this optins as chosen?? */}
                                {opt.option_name}
                            </button>
                        </div>
                    )}
                </div>
            :
            <p>this decion doesn't have any options!</p>
            }
        </div>
    );
}


