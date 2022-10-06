import CreateNew from './CreateNew';
import FinalDecision from './FinalDecision';
import ListOptions from './ListOptions';
import DecisionList from './DecisionList';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fetchs from './Fetchs';

import Home from './Home';

import React, {useState, useEffect} from 'react';



// this is all just a "mockup" or skeleton of our page
// *im not sure how to make our pages only include minimal components.. i think that will happen in routing?
// * actually im pretty sure we jus move the components around to wherever we need them...
// Header may exisit in navbar or vis versa
// in all componenets youll see export default {component_name}.. i beleive this syntax will work

function App() {

  // most recent user
  const [currentUser, setCurrentUser ] = useState('')

  // state for determing if logged in or not
  const [hasLoggedIn, setHasLoggedIn] = useState(false)

  function fetchResource(url){
    return fetch(url).then(res => res.json())}
    

  // state for getting group name -> used to determine which decisions to render
  const [currentGroupName, setCurrentGroupName] = useState('')

  // state for a new decision id that gets created
  const [decId, setDecId] = useState()

  // function fetchResource(url){
  //   return fetch(url).then(res => res.json())}

    function createResource(url, body){
      return fetch(url,{method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(body),})
      .then(res => res.json())}

  return (
    <BrowserRouter>
      {hasLoggedIn ? <NavBar /> : <div></div>}
      {/* <Fetchs /> */}
      <Routes>
       
        <Route path="/" element=
        {<Home 
          onCurrentUser={(newUser)=>setCurrentUser(newUser)}
          onCurrentGroupName={(newGroupName)=>setCurrentGroupName(newGroupName)}
          //onCurrentGroupName={(newGroupName)=>executeJointsSequence(newGroupName)}
          onHasLoggedIn={() => setHasLoggedIn(true)}
          hasLoggedIn={hasLoggedIn}
          username={currentUser.username}
          groupname={currentUser.groupname}
          createResource={createResource}
          fetchResource={fetchResource}/>
        }>
        </Route>

        <Route path="/new" element=
          {<CreateNew 
            onGetDecisionId={(newDecId)=>setDecId(newDecId)}/>
          }>
        </Route>
        
        {/* //<Route path="/new" element={<CreateNew createResource={createResource}/>}></Route> */}
       
        <Route path="/dec-list" element={<DecisionList fetchResource={fetchResource}/>}></Route>
       
        <Route path="/final" element={<FinalDecision />}></Route>
       
        <Route path="/list-opt" element={<ListOptions />}></Route>
      
      </Routes>

    </BrowserRouter>
    )
}

export default App;