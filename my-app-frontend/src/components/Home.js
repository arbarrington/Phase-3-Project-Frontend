import React, {useState, useEffect} from "react";
import DecisionList from "./DecisionList";
import Login from "./Login";
import Fetchs from "./Fetchs";

export default function Home({ onCurrentUser, onHasLoggedIn, username, groupname, hasLoggedIn }){

    const [matchingDecision, setMatchingDecision] = useState([])
    const [thisUserID, setThisUserID] = useState()

    // function dealingWithThisShit(newMatchingDecion) {
    //     console.log("tHEYRE INSIDE THE HOUSE",newMatchingDecion)
    //     setMatchingDecision([...matchingDecision,newMatchingDecion])
    // }


    return(
        <div>
            hello from home
           { hasLoggedIn ? 
            <DecisionList
                username={username}
                groupname={groupname}
                matchingDecision={matchingDecision}
                //map decision list for this sucker
            />
                :
            <Login
                onCurrentUser={onCurrentUser}
                onHasLoggedIn={onHasLoggedIn}
                onThisUserID={(newUserID)=>setThisUserID(newUserID)}
                onMatchingDecisions={(newMatchingDecision)=>setMatchingDecision([...matchingDecision, newMatchingDecision])}
                //onMatchingDecisions={dealingWithThisShit}
            />}
        </div>
    )
}
