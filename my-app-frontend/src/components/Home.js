import React, {useState, useEffect} from "react";
import DecisionList from "./DecisionList";
import Login from "./Login";
import Fetchs from "./Fetchs";

export default function Home({ onCurrentUser, onHasLoggedIn, username, groupname, hasLoggedIn }){

    const [currentUsersDecision, setCurrentUserDecsision] = useState([])
    const [thisUserID, setThisUserID] = useState()



    return(
        <div>
            <h1>Gaggle</h1>
           { hasLoggedIn ? 
            <DecisionList
                username={username}
                groupname={groupname}
                //map decision list for this sucker
            />
                :
            <Login
                onCurrentUser={onCurrentUser}
                onHasLoggedIn={onHasLoggedIn}
                onThisUserID={(newUserID)=>setThisUserID(newUserID)}
                //onUDID={(newDecisions)=>setCurrentUserDecsision([...currentUsersDecision, newDecisions])}
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