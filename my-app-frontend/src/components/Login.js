import React, {useState, useEffect} from "react";
import ExtractDecisionSequence from "./ExtractDecisionSequence";


export default function Login({onCurrentUser, onHasLoggedIn, onThisUserID, onMatchingDecisions}){
 
    // state variable for form input data
    const [ userData, setUserData ] = useState({
        username: '',
        groupname: ''
    });

    const [allDecisions, setAllDecisions] = useState([])
    const [jointsData, setJointsData] = useState([])

    const [matchingDecision, setMatchingDecisions] = useState([])



useEffect(() => {
    fetch('http://localhost:9292/decisions')
    .then((d) => d.json())
    .then((d) => {
        setAllDecisions(d)
    })
    },[])

useEffect(() => {
    fetch('http://localhost:9292/joints')
    .then((d) => d.json())
    .then((d) => {
        setJointsData(d)
    })
    },[])

  // updating the user's input as they type...
  function handleChange(e) {
    setUserData({
        ...userData, [e.target.name]: e.target.value,
      });
  }

  // once submit their name, posts their username//id//groupname to the backend
  function handleSubmit(e) {
    e.preventDefault();

    const postedUser = {
        username: userData.username,
        num_decisions_made: 0
    }

    // post ome shit
    fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postedUser)
        })
        .then((r) => r.json())
        .then((postedUser) => { 
            onThisUserID(postedUser.id)
        })

        onCurrentUser(userData)
        onHasLoggedIn()

        // execute extract decisions sequence
        extractDecisionSequence(postedUser.id)     

        document.getElementById("login-form").reset();
   };

   // make sure to change 6 to userID
   // problem: not setting the state fast enough
    function extractDecisionSequence(userID) {
        jointsData.filter(row => row.user_id==6).forEach((row) => {
            allDecisions.forEach((entry) => {
                if (row.decision_id == entry.id) {
                    //console.log(entry.event_type)
                    onMatchingDecisions(entry.event_type)
                }
            })
        })
    }
     
  return (
    <React.Fragment>
    <div>
      <form onSubmit={handleSubmit} id="login-form">
        <label>
          <input type="text" name="username" onChange={handleChange} className="input-text" placeholder="Your Username"/>
        </label>
        <label>
          <input type="text" name="groupname" onChange={handleChange} className="input-text" placeholder="Your Group's Name"/>
        </label>
        <button 
            type="submit" 
            className="submit">
        </button>
      </form>
    </div>
    </React.Fragment>
  );
}
    

