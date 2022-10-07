import React, {useState, useEffect} from "react";


export default function CreateNew({onGetDecisionId, onCreatedOptions, onSetRerender }){

// state for keeping track of user inputted decions
const [freshDecision, setFreshDecision] = useState({
    decisionName: '',
    eventType: '',
    decided: false,
    groupName: '',
    eventTime: '',
    decisionDeadline: ''
})

// state for keeping track of user inputted options
const [theseOptions, setTheseOptions] = useState([])

// keeping decision state updated as user inputs info
function handleChange(e) {
    setFreshDecision({
        ...freshDecision, [e.target.name]: e.target.value,
      });
  }

// keeping option state updated as user inputs info
function handleChangeOptions(e) {
    setTheseOptions(e.target.value
    .split(','));
}


let postedOptions = []
theseOptions.forEach(option => {
    postedOptions.push(option)
})

const postedDecision = {
    event_type: freshDecision.decisionName,
    decided: false,
    group_name: freshDecision.groupName,
    event_time: null,
    decision_deadline: null
}


function handleFreshSubmit(e) {
    
    e.preventDefault()
    fetch("http://localhost:9292/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postedDecision)
        })
        .then((r) => r.json())
        .then((postedDecision) => { 
            console.log('success:', postedDecision.id)
            postOptions(postedDecision.id)
            executeJointsSequence(postedDecision.id)
            onGetDecisionId(postedDecision.id)

        })

    document.getElementById("freshCityForm").reset();
}

function postOptions(decisionId) {

    let cheaterOptArray = []
    
    theseOptions.forEach(entry => {
        const option = {
            option_name: entry,
            num_votes: 0,
            decision_id: decisionId,
            chosen: false
        }

        cheaterOptArray.push(entry)        

        fetch("http://localhost:9292/create-options", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(option)
            })
            .then((r) => r.json())
            .then((option) => { 
                console.log('success option:', option)
            })
        
        }
    )
    onCreatedOptions(cheaterOptArray)
}


function executeJointsSequence(decisionID) {

    let thingToString = {
        decision_id: decisionID,
        group_name: freshDecision.groupName
    }
    
    console.log('current group:', freshDecision.groupName)
    console.log('current dec id:', decisionID)
    
    fetch("http://localhost:9292/create-joints", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(thingToString)
        })
        .then((r) => r.json())
        .then((thingToString) => { 
            //console.log('hey yall')
        })
}


return (
<React.Fragment>
    <div>
    <div className="form-container">
        <form onSubmit={handleFreshSubmit} id='freshCityForm'>
            <label>
                <input type="text" name="groupName" onChange={handleChange} className="input-text" placeholder="What is your Group's Name?"/>
            </label>
            <br></br>
            <label>
                <input type="text" name="decisionName" onChange={handleChange} className="input-text" placeholder="What are you Deciding?"/>
            </label>
            <br></br>
            <label>
                <input type="text" name="theseOptions" onChange={handleChangeOptions} className="input-text" placeholder="What Options are You Considering?"/>
            </label>
            <br></br>
            <button
                type="submit" 
                className="submit">
                consult the gaggle
            </button>
        </form>
        </div>
    </div>
    </React.Fragment>
)

    


    
}
