import CreateNew from './CreateNew';
import DecisionList from './DecisionList';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';


import React, {useState, useEffect} from 'react';


function App() {

  // get all the exsisting decisions from the db
  const [allDecs, setAllDecs] = useState([])
  useEffect(() => {
    fetch('http://localhost:9292/decisions')
        .then(d => d.json())
        .then((d) => setAllDecs(d))
  },[])

  // get all the exsisting options from the db
  const [allOpts, setAllOpts] = useState([])
  useEffect(() => {
    fetch('http://localhost:9292/options')
        .then(d => d.json())
        .then((d) => setAllOpts(d))
  },[])

  // get all the exsisting joints from the db
  const [allJoints, setAllJoints] = useState([])
  useEffect(() => {
    fetch('http://localhost:9292/joints')
        .then(d => d.json())
        .then((d) => setAllJoints(d))
  },[])

  // have the current groupname accessible by all components
  const [currentGroup, setCurrentGroup] = useState('')

  // state for if the user has logged in or not (so doesn't revert back to false in the login file)
  // state variable for if logged in -> use as terenary to render whatever you want
  // just used to render a login message now, can change to reroute if  you want
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // logic to fill out the group that has logged in decions
  const [groupDecs, setGroupDecs] = useState([])

  // state that contains ALL of that groups options (options for ALL DECS)
  const [groupOpts, setGroupOpts] = useState([])


  // this sequence of functions fires once a user logs in to update state to reflect thata groups decions and options
  function handleDetDecs(newGroup) {
    // looking through all of the joints to extract decion ids that correspond to the current group name
    let matchingDecIds =[]
    allJoints.forEach((joint) => {
        if (joint.group_name==newGroup && !matchingDecIds.includes(joint.decision_id)) {
            matchingDecIds.push(joint.decision_id)
        }
      })
      // call the next function in the sequence
      nowSettingMatchingDecs(matchingDecIds)
  }

  function nowSettingMatchingDecs(matchingDecIds) {
  // looking through all of the decions and filling out a state of group decs where the dec id and group name math (via joins table beta)
    let matchingDecFull = []
      allDecs.forEach((dec) => {
          matchingDecIds.forEach((matchingId) => {
              if (dec.id == matchingId && !matchingDecFull.includes(dec)) {
                  matchingDecFull.push(dec)
              }
          })
      })
      // update state of the matching states
      setGroupDecs(matchingDecFull)
      // call the next function in the sequence
      nowSettingOptions(matchingDecFull)
  }

  function nowSettingOptions(matchingDecFull) {
    // looking through all the options and extracting ones that have forein keys that match the current groups decions
    // this will extract the options for ALL of the matching decions
    // matching options will be passed to the render card which will filter out whcih ones to dsipaly!!
    let matchingOptions = []
      allOpts.forEach((opt) => {
          matchingDecFull.forEach((dec) => {
              if (opt.decision_id == dec.id) {
                  matchingOptions.push(opt)
              }
          })
      })
      // update state for ALL the options for the matching decions
      setGroupOpts(matchingOptions)
  }

  // function that refetches all of decions, options, and joins to reset those states AFTER a new decion is posted
  // THIS IS SO FUCKING REDUDANT I KNOW I AM SO SORRY BUT ITS ALOMST 1 AM AND I GOTTA RUN IN THE MORNINGN SO UEAH
  function superRedundantReFetch() {
    // reset all decs
    fetch('http://localhost:9292/decisions')
    .then(d => d.json())
    .then((d) => setAllDecs(d))

    // reset all opts
    fetch('http://localhost:9292/options')
    .then(d => d.json())
    .then((d) => setAllOpts(d))

    // reset all joins
    fetch('http://localhost:9292/joints')
    .then(d => d.json())
    .then((d) => setAllJoints(d))

    // refire the mathcing sequence with the fresh data just fetched
    console.log('current group from refetch', currentGroup)
    handleDetDecs(currentGroup)
  }

  return (
    <BrowserRouter>
      
      <NavBar/>
      
      <Routes>

        <Route path="/" element={
          <Login
            onCurrentGroup={(newGroup)=>setCurrentGroup(newGroup)}
            onSetIsLoggedIn={()=>setIsLoggedIn(true)}
            isLoggedIn={isLoggedIn}
            onDetDecs={(newGroup)=>handleDetDecs(newGroup)}
          />
        }>
        </Route>

        <Route path="/new" element={
          <CreateNew 
            onReFetch={()=>superRedundantReFetch()}
          />
          }>
        </Route>
       
        <Route path="/dec-list" element={
          <DecisionList 
            currentGroup={currentGroup}
            groupDecs={groupDecs}
            groupOpts={groupOpts}
          />
        }>
        </Route>
      
      
      
      </Routes>

    </BrowserRouter>
    )
}

export default App;

