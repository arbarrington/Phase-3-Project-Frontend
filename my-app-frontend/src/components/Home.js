import React, {useState, useEffect} from "react";
import DecisionList from "./DecisionList";
import Login from "./Login";
import Fetchs from "./Fetchs";

export default function Home({ onCurrentUser, onHasLoggedIn, username, groupname, hasLoggedIn, fetchResource, createResource }){

    const [matchingDecision, setMatchingDecision] = useState([])
    const [thisUserID, setThisUserID] = useState()

    return(
        <div>
            <h1>Gaggle</h1>
           { hasLoggedIn ? 
            <DecisionList
                username={username}
                groupname={groupname}
                matchingDecision={matchingDecision}
                fetchResource={fetchResource}
                createResource={createResource}
            />
                :
            <Login
                fetchResource={fetchResource}
                createResource={createResource}
                onCurrentUser={onCurrentUser}
                onHasLoggedIn={onHasLoggedIn}
                onThisUserID={(newUserID)=>setThisUserID(newUserID)}
                onMatchingDecisions={(newMatchingDecision) => setMatchingDecision([...matchingDecision, ...newMatchingDecision])}
            />}
        </div>
    )
}
