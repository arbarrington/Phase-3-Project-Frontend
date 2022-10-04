import React, {useState, useEffect} from "react";
import ExtractDecisionSequence from "./ExtractDecisionSequence";


export default function Login({onCurrentUser, onHasLoggedIn, onThisUserID, onUDID}){
 
    // state variable for form input data
    const [ userData, setUserData ] = useState({
        username: '',
        groupname: ''
    });

    const [allDecisions, setAllDecisions] = useState([])

    const [matchingDecision, setMatchingDecisions] = useState([])


useEffect(() => {
    fetch('http://localhost:9292/decisions')
    .then((d) => d.json())
    .then((d) => {
        console.log("not the exicting console log",d)
        setAllDecisions(d)
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

    function extractDecisionSequence(userID) {

        // fetch the joints info and update state to have the user's decision's ids in an array
        // CHANGE NUMBer TO USERID ONCE DONE TESTING
        fetch("http://localhost:9292/joints")
        .then((r) => r.json())
        .then((r) => {
            console.log("inside extract funtion",allDecisions)
            r.filter(row => row.user_id==6).forEach((row) => {
               allDecisions.forEach((entry) => {
                    if (row.decision_id == entry.id) {
                        // literallyjustthis(entry.event_type)
                        setMatchingDecisions((entry) => [...matchingDecision,entry.event_type])
                        console.log(matchingDecision)
                    }
                })
            })
        })
     }

    //  function literallyjustthis(newstuff) {
    //     setMatchingDecisions(newstuff => [...matchingDecision, newstuff])
    //     console.log(matchingDecision)
    //  }



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
    

