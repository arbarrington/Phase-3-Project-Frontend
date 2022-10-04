import React, {useState, useEffect} from "react";


export default function Login({onCurrentUser, onHasLoggedIn}){
 
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
    console.log(userData)

    const newUser = {
      groupname: userData.groupname,
      username: userData.username,
    }

    onCurrentUser(newUser)
    onHasLoggedIn()

    document.getElementById("login-form").reset();
   };

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
    
