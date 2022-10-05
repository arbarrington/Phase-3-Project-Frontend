import React, {useState, useEffect} from "react";
import ExtractDecisionSequence from "./ExtractDecisionSequence";


export default function Login({onCurrentUser, onHasLoggedIn, onThisUserID, onUDID}){
 
    // state variable for form input data
    const [ userData, setUserData ] = useState({
        username: '',
        groupname: ''
    });

    const [userDIDs, setUserDIDs] = useState([])

    const [allDecisions, setAllDecisions] = useState([])

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


        fetch('http://localhost:9292/decisions')
        .then((d) => d.json())
        .then((d) => {
            console.log(d)
            setAllDecisions([...allDecisions, d])
        })

        // fetch the joints info and update state to have the user's decision's ids in an array
        // CHANGE 14 TO USERID ONCE DONE TESTING
        fetch("http://localhost:9292/joints")
        .then((r) => r.json())
        .then((r) => {
            console.log(r)
            
            r.filter(row => row.user_id==13).forEach((row) => {
               
                // setUserDIDs([...userDIDs, row.decision_id])
               allDecisions.forEach((entry) => {
                    if (row.decision_id == entry.id) {
                        console.log(entry)
                    }
                })
            })
        })
     }




    






  return (
    <React.Fragment>
    <div className="login-full">
      <form onSubmit={handleSubmit} id="login-form">
        <label className="username">
          <input type="text" name="username" onChange={handleChange} className="input-username" placeholder="Your Goose Name"/>
        </label>
        <br></br>
        <br></br>
        <label>
          <input type="text" name="groupname" onChange={handleChange} className="input-group" placeholder="Your Flock's Name"/>
        </label>
        <br></br>
        <br></br>
        <button 
            type="submit" 
            className="submit">
              Fly South!
        </button>
      </form>
    </div>
    </React.Fragment>
  );
}
    

