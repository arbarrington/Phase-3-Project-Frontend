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

export default function App() {

  // most recent user
  const [currentUser, setCurrentUser ] = useState('')

  // state for determing if logged in or not
  const [hasLoggedIn, setHasLoggedIn] = useState(false)

  function fetchResource(url){
    return fetch(url).then(res => res.json())}

    function createResource(url, body){
      return fetch(url,{method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(body),})
      .then(res => res.json())}



    function updateDecision(urlLoc, id){
    fetch(`'http//:${urlLoc}/${id}'`, {
      method: "PATCH",
      body: JSON.stringify({
      decided: true
      }),
      headers: {
      "Content-Type": "application/json"
        }
      })
      .then(r => r.json())
      .then(r => console.log(r))}
      
        
    
  return (
    <BrowserRouter>
      {hasLoggedIn ? <NavBar /> : <div></div>}
      <br/>
      <br/>
      {/* <Fetchs /> */}
      <Routes>
       
        <Route path="/" element=
        {<Home 
          onCurrentUser={(newUser)=>setCurrentUser(newUser)}
          onHasLoggedIn={() => setHasLoggedIn(true)}
          hasLoggedIn={hasLoggedIn}
          username={currentUser.username}
          groupname={currentUser.groupname}
          createResource={createResource}
          fetchResource={fetchResource}/>
        }>
        </Route>

        <Route path="/new" element={<CreateNew createResource={createResource} />}></Route>
       
        <Route path="/dec-list" element={<DecisionList fetchResource={fetchResource} />}></Route>
       
        <Route path="/final" element={<FinalDecision updateDecision={updateDecision} fetchResource={fetchResource} />}></Route>
       
        <Route path="/list-opt" element={<ListOptions />}></Route>
      
      </Routes>

    </BrowserRouter>
    )
}

