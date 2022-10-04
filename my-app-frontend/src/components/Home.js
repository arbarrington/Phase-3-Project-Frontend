import React from "react";
import DecisionList from "./DecisionList";
import Login from "./Login";


export default function Home({ onCurrentUser, onHasLoggedIn, username, groupname, hasLoggedIn }){

    return(
        <div>
            hello from home
           { hasLoggedIn ? 
            <DecisionList
                username={username}
                groupname={groupname}
            />
                :
            <Login
                onCurrentUser={onCurrentUser}
                onHasLoggedIn={onHasLoggedIn}
            />}
        </div>
    )
}

// loggedIn ? interate over decisions through render card function that match user id : <Login />

// assign user id stuff - happens auto when push to db??
// push to db ...
// test getting decisions that are joined to that user
// make a function file for rendering cards

// pasta users to users database