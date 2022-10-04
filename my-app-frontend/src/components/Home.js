import React from "react";
import Login from "./Login";



// terenary here
// not logged in: must log in
// logged in: shows their decisions


export default function Home({ onCurrentUser, onHasLoggedIn, username, groupname, hasLoggedIn }){

    return(
        <div>
           { hasLoggedIn ? 
            <p> thanks for logging in, buckagroo</p>
                :
            <Login
                onCurrentUser={onCurrentUser}
                onHasLoggedIn={onHasLoggedIn}
            />}
            hello from home
            <p>{username}</p>
            <p>{groupname}</p>
        </div>
    )
}

// loggedIn ? interate over decisions through render card function that match user id : <Login />

// assign user id stuff - happens auto when push to db??
// push to db ...
// test getting decisions that are joined to that user
// make a function file for rendering cards