import React, {useState, useEffect} from "react";
import DecisionList from "./DecisionList";
import Login from "./Login";


export default function Home({ onCurrentUser, onHasLoggedIn, username, groupname, hasLoggedIn }){

    // a user and their ID which is made by the DB when posted
    // their decions
    // thier decions through the joints

    //fetch to get the decions for them via joints

    const [thisUserID, setThisUserID] = useState()
    const [thisUsersOpenDecisions, setThisUsersOpenDecisions] = useState([])
    const [allDecisions, setAllDecisions] = useState([])
    const [joinTableReponse, setJoinTableResponse] = useState([])

   // only do these fetches once loggin in
    useEffect(() => {
        fetch("http://localhost:9292/joints")
        .then((r) => r.json()
        .then((r) => {
            console.log("joints fetch", r)
            let thisUserFetch = r.filter(row => row.user_id==14)
            let thisUserDecIDs = thisUserFetch.map(row => {
                console.log(row.decision_id)
            })
            console.log(thisUserDecIDs)
        }))
    },[hasLoggedIn])

    useEffect(() => {
        fetch("http://localhost:9292/decisions")
        .then((r) => r.json()
        .then((r) => setAllDecisions(r)))
    },[])

    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json()
        .then((r) => console.log('users fetch', r)))
    },[hasLoggedIn])


    //console.log("the user id:", thisUserID)

    // map over the joins response to make an array of decion ids that belong to a single user and thier id

    


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
                onThisUserID={(newUserID)=>setThisUserID(newUserID)}
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