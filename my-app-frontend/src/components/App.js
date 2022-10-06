import CreateNew from './CreateNew';
import FinalDecision from './FinalDecision';
import ListOptions from './ListOptions';
import DecisionList from './DecisionList';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fetchs from './Fetchs';

import Home from './Home';

import React, {useState, useEffect} from 'react';


function App() {

  // most recent user
  const [currentUser, setCurrentUser ] = useState('')

  // state for determing if logged in or not
  const [hasLoggedIn, setHasLoggedIn] = useState(false)

  // state for getting group name -> used to determine which decisions to render
  const [currentGroupName, setCurrentGroupName] = useState('')

  // state for a new decision id that gets created
  const [decId, setDecId] = useState()

  // cheat code to pass options around
  const [createdOptions, setCreatedOptions] = useState([])

  return (
    <BrowserRouter>
      {hasLoggedIn ? <NavBar /> : <div></div>}
      <Routes>
       
        <Route path="/" element=
        {<Home 
          onCurrentUser={(newUser)=>setCurrentUser(newUser)}
          onCurrentGroupName={(newGroupName)=>setCurrentGroupName(newGroupName)}
          onHasLoggedIn={() => setHasLoggedIn(true)}
          hasLoggedIn={hasLoggedIn}
          username={currentUser.username}
          groupname={currentUser.groupname}
          />
        }>
        </Route>

        <Route path="/new" element=
          {<CreateNew 
            onGetDecisionId={(newDecId)=>setDecId(newDecId)}
            onCreatedOptions={(newOptions)=>setCreatedOptions([...createdOptions, newOptions])}
            />
          }>
        </Route>
       
        <Route path="/dec-list" element={<DecisionList 
          createdOptions={createdOptions}
        />}></Route>
       
        <Route path="/final" element={<FinalDecision />}></Route>
       
        <Route path="/list-opt" element={<ListOptions />}></Route>
      
      </Routes>

    </BrowserRouter>
    )
}

export default App;