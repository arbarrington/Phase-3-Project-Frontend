import React, {useState, useEffect} from "react";


// old params don't think gonna need cause data basing over stating: onAddUser, onHasLoggedIn, onCurrentUser
// also because having login at the top
export default function Login(){
 // state variable for form input data (just username @ this time)
 const [ userData, setUserData ] = useState({
    username: ''
  });

  // state for if there's an error logging in
  const [ loginError, setLoginError] = useState(null)

  // updating the user's input as they type...
  function handleChange(e) {
    setUserData({
        ...userData, [e.target.name]: e.target.value,
      });
  }

  // once submit their name, posts their username//id to our json server
  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      id: userData.username,
      username: userData.username,
      cities: []
    }

    // some call back function stuff
    onCurrentUser(newUser)

    // post new user to the database ~ update the url tho ~ make Sinatra
    fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
    })
    .then((r) => r.json())
    .then((newUser) => {
        onAddUser(newUser)
        setLoginError(false)
        onHasLoggedIn()
    })
    .catch(() => {
        console.log('ahhhhh!')
        setLoginError(true)
    });
    document.getElementById("login-form").reset();
  };

  return (
    <React.Fragment>
    <div>
      {loginError ? 
        <h2>Username taken. Submit a different username!</h2>
      : 
        <h2>Enter Username and Group Name to Login and Vote!!</h2>
      }
      <form onSubmit={handleSubmit} id="login-form">
        <label>
          <input type="text" name="username" onChange={handleChange} className="input-text" placeholder="Your Username"/>
        </label>
        <button type="submit" className="submit">
          <img src={check} alt="checkmark"/>
        </button>
      </form>{!null ? 
            null : 
            <p>Not a valid input. Please try again.</p>
        }
    </div>
    </React.Fragment>
  );
}
    
