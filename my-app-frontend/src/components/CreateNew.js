

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
    setTheseOptions([
        ...theseOptions, e.target.value
    ]); 
}

 function handleFreshSubmit(e) {
     e.preventDefault()
     console.log(`Option State Array`)
     console.log(theseOptions)
     console.log(`Create Decisions Array`)
     console.log(freshDecision)

//     fetch(`https://weatherdbi.herokuapp.com/data/weather/${freshCity}`)
//     .then(res => res.json())
//     .then (data => {
//         if (data.region) {
//             formattedCity = data.region
//             setCityIsValid(true)
//             onFreshCityDrama(formattedCity)
//         } else {
//             setCityIsValid(false)
//             setThisCity(freshCity)
//         }
//     })
     document.getElementById('freshCityForm').reset()
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
        {/* {cityIsValid ? 
        null : 
        <p>{thisCity} is not a valid input. Please try again!</p>
        } */}
    </div>
</div>
</React.Fragment>
)

    


    
}