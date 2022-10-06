import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";
import {v4 as uuid} from "uuid";


export default function DecisionList({username, groupname, matchingDecision, createdOptions }){

    const [userFullDecision, setUserFullDecision] = useState([])
    const [decOptions, setDecOptions] = useState([])
    
    const [rerender, setReRender] = useState(false)

    useEffect(() => {
        let thingsToSet = []
        fetch('http://localhost:9292/decisions')
            .then(d => d.json())
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
        },[rerender])


    useEffect(() => {
        let thingsToSet = []
        fetch('http://localhost:9292/options')
            .then(d => d.json())
            .then((d) => {
                matchingDecision.forEach((id_num) => {
                    d.forEach((entry) => {
                        if (entry.id == id_num) {
                            thingsToSet.push(entry)
                        }
                        // once state filled, render the cards
                        // then reset state
                })
            })
            setDecOptions(thingsToSet)
        })
        },[rerender])


    console.log('decion list group name', groupname)
    console.log("some state businet", userFullDecision)
    // console.log('matching decion ids', matchingDecision)
    // console.log('created options', createdOptions)
    // console.log('options that already exist and match', decOptions)


    // options to render only exists when some options are created in create new
    // let optionsToRender

    // createdOptions.forEach(element =>
    //     optionsToRender.push(element)
    // )

    // console.log(optionsToRender)








return(
    <div>
        {
        userFullDecision.map((d) => {
           return( <DecisionCard key={uuid()} options={decOptions} decision={d}/> )
        })
        }
        <input id="submitdecision" type="submit" value="Submit!" />
    </div>
)
}
