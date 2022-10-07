import React, {useState, useEffect} from "react";

// this function takes in currentGroup that is defined from the user "login" so that it
// can call the function sequence that matches up decions and optoins to whatever group the current user is
// currelnty logged into.  cause without calling that function sequence, the new option (if it is for this group) will not
// show up on decion list unless the user refreshes the page and sings back in!
export default function CreateNew({ onReFetch }){

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

// pushing options that the user creates into an array
let postedOptions = []
theseOptions.forEach(option => {
    postedOptions.push(option)
})

// making the decion state var into a constant - seems to post better like this
const postedDecision = {
    event_type: freshDecision.decisionName,
    decided: false,
    group_name: freshDecision.groupName,
    event_time: null,
    decision_deadline: null
}

// once a new decion is subitted, this sick function fires off
function handleFreshSubmit(e) {
    
    e.preventDefault()

    // post the new decion
    fetch("http://localhost:9292/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postedDecision)
        })
        .then((r) => r.json())
        .then((postedDecision) => { 
            postOptions(postedDecision.id)
            executeJointsSequence(postedDecision.id)
            console.log('success!', postedDecision)
        })

    // reset the form
    document.getElementById("freshCityForm").reset();

}

// posts the optoins into the db
// sep function so that it can get the new decID from the previous post request (this function is called in a .then)
function postOptions(decisionId) {

    // state is a bitch so we're using some good ol fasioned arrays
    // need to do this sequence for EACH option provided
    // options must be seperated by a ", "
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
            .then((r) => {
                console.log('success!', r)
            })
        }
    )
}

// this function fills out the joins table for the new decion and what group it belongs to
// like the last function, it is called in a .then of posting the decion so that it has access to the new decision's id
function executeJointsSequence(decisionID) {

    let thingToString = {
        decision_id: decisionID,
        group_name: freshDecision.groupName
    }
    
    fetch("http://localhost:9292/create-joints", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(thingToString)
        })
        .then((r) => r.json())
        .then((r) => {
            console.log('success!', r)
            // call a function in app that triggers a refetch of all decions, options, and joins
            onReFetch()
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
