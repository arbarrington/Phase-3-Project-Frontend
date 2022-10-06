import React, {useState, useEffect} from "react";


export default function Login({onCurrentUser, onHasLoggedIn, onThisUserID, onMatchingDecisions, fetchResource, createResource}){
 
    // state variable for form input data
    const [ userData, setUserData ] = useState({
        username: '',
        groupname: ''
    });

    const [allDecisions, setAllDecisions] = useState([])
    const [jointsData, setJointsData] = useState([])

useEffect(() => {
    fetchResource('http://localhost:9292/decisions')
    .then((d) => {
        setAllDecisions(d)
    })
    },[])

useEffect(() => {
    fetchResource('http://localhost:9292/joints')
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

    // post user
    createResource("http://localhost:9292/users", postedUser)
        .then((postedUser) => { 
            onThisUserID(postedUser.id)
        })

        onCurrentUser(userData)
        onHasLoggedIn()

        // execute extract decisions sequence
        extractDecisionSequence(postedUser.id)     

        document.getElementById("login-form").reset();
   };

   // make sure to change num to userID
    function extractDecisionSequence(userID) {
        let idArray = []
        jointsData.filter(row => row.user_id==3).forEach((row) => {
            allDecisions.forEach((entry) => {
                if (row.decision_id == entry.id && !idArray.includes(entry.id)) {
                    idArray.push(entry.id)
                }
            })
        })
        onMatchingDecisions(idArray)
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
    

