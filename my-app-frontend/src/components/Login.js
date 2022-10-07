import React, {useState, useEffect} from "react";


export default function Login({ onCurrentGroup, onSetIsLoggedIn, isLoggedIn, onDetDecs }){

    // state variable for form input data
    const [ userData, setUserData ] = useState({
        username: '',
        groupname: ''
    });

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

    // post the user who just logged in
    // THIS POST IS BROKEN
    fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postedUser)
        })
        .then((r) => r.json())
 
        onCurrentGroup(userData.groupname)
        onDetDecs(userData.groupname)
        
        onSetIsLoggedIn()

        document.getElementById("login-form").reset();
   };
     
  return (
    <React.Fragment>
    {isLoggedIn ? 
    <p>Welcome {userData.username} of {userData.groupname}, it's Time to Vote!</p>
    :
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
    }
    </React.Fragment>
  );
}
