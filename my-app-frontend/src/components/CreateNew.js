

import React, {useState, useEffect} from "react";

export default function CreateNew(onGetDecisionId){

const [freshDecision, setFreshDecision] = useState({
    decisionName: '',
    eventType: '',
    decided: false,
    groupName: '',
    eventTime: '',
    decisionDeadline: ''
})

const [theseOptions, setTheseOptions] = useState([])

function handleChange(e) {
    setFreshDecision({
        ...freshDecision, [e.target.name]: e.target.value,
      });
  }

function handleChangeOptions(e) {
    setTheseOptions(e.target.value
    .split(','));
}

// MM/DD HH:MM
function dateFormatValidation (inputDate) {
    let year = new Date().getFullYear()
    let month = inputDate.substring(0,2).parseInt()
    let date = inputDate.substring(3,5).parseInt()
    let hour = inputDate.substring(6,8).parseInt()
    let minute = inputDate.substring(9,11).parseInt()
    if (inputDate.length !== 11) { 
        return false; 
    }
    else if (inputDate.substring(2, 3) !== '/' || inputDate.substring(8, 9) !== ':') { 
        return false; 
    } 
    else if (month > 12 || date > 31 || hour > 23 || minute > 59) {
        return false;
    }
    else {return `DateTime.new(${year}, ${month}, ${date}, ${hour}, ${minute})`}
}

let postedOptions = []

theseOptions.forEach(option => {
    postedOptions.push(option)
})

const postedDecision = {
    event_type: freshDecision.decisionName,
    decided: false,
    group_name: freshDecision.groupName,
    event_time: freshDecision.eventTime,
    decision_deadline: freshDecision.decisionDeadline
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
                //console.log('success:', decisionId)
                //test(decisionId)
                //onGetDecisionId(decisionId)
            })
    }

    function test(decisionId) {
        
        console.log(decisionId)
        
        theseOptions.forEach(entry => {
            const option = {
                option_name: entry,
                num_votes: 0,
                decision_id: decisionId,
                chosen: false
            }

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
    )}

    function executeJointsSequence(newGroupName) {

        let thingToString = {
          decision_id: 1,
          user_id: 3
        }
      
        console.log('current group:',newGroupName)
        //console.log('current user:',currentUser)
        //console.log('current dec id:', decId)
      
        fetch("http://localhost:9292/create-joints", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(thingToString)
          })
          .then((r) => r.json())
          .then((thingToString) => { 
              console.log('hey yall')
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
            <input type="text" name="eventTime" onChange={handleChange} className="input-text" placeholder="What Time is your Event?"/>
        </label>
        <br></br>
        <label>
            <input type="text" name="theseOptions" onChange={handleChangeOptions} className="input-text" placeholder="What Options are You Considering?"/>
        </label>
        <br></br>
        <label>
            <input type="text" name="decisionDeadLine" onChange={handleChange} className="input-text" placeholder="When must the decison be reached?"/>
        </label>
        <br></br>
        <button type="submit" className="submit">
            {/* <img src={check} alt="checkmark"/> */}
        </button>
    </form>
    </div>
</div>
</React.Fragment>
)

    


    
}
