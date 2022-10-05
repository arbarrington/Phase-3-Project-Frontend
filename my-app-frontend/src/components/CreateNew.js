

import React, {useState, useEffect} from "react";

export default function CreateNew(){

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

const postedDecision = {
    event_type: freshDecision.decisionName,
    decided: false,
    group_name: freshDecision.groupName,
    event_time: freshDecision.eventTime,
    decision_deadline: freshDecision.decisionDeadline
}

 function handleFreshSubmit(e) {
     e.preventDefault()
     console.log(`Option State Array`)
     console.log("options",theseOptions)
     console.log(`Create Decisions Array`)
     console.log(freshDecision)

    fetch("http://localhost:9292/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postedDecision)
        })
        .then((r) => r.json())
        .then((postedDecision) => { 
            console.log('success:', postedDecision)
        })
   };   
 
//  const data = { username: 'example' };

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success:', data);
//   })

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
        {/* {cityIsValid ? 
        null : 
        <p>{thisCity} is not a valid input. Please try again!</p>
        } */}
    </div>
</div>
</React.Fragment>
)

    


    
}