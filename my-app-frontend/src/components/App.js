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

  // console logs for testing
  // console.log('all decisions:',allDecs)
  // console.log('all options',allOpts)
  // console.log('all joints',allJoints)
  // console.log('current group:',currentGroup)



  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <Login
            onCurrentGroup={(newGroup)=>setCurrentGroup(newGroup)}
            onSetIsLoggedIn={()=>setIsLoggedIn(true)}
            isLoggedIn={isLoggedIn}
          />
        }>
        </Route>

        <Route path="/new" element=
          {<CreateNew 
            // onGetDecisionId={(newDecId)=>setDecId(newDecId)}
            // onCreatedOptions={(newOptions)=>setCreatedOptions([...createdOptions, newOptions])}
            // onSetRerender={()=>setReRender(true)}
            />
          }>
        </Route>
       
        {/* <Route path="/dec-list" element={<DecisionList 
          createdOptions={createdOptions}
          rerender={rerender}
        />}></Route> */}
      
      
      
      </Routes>

    </BrowserRouter>
    )
}

export default App;





  // // most recent user
  // const [currentUser, setCurrentUser ] = useState('')

  // // state for determing if logged in or not
  // const [hasLoggedIn, setHasLoggedIn] = useState(false)

  // // state for getting group name -> used to determine which decisions to render
  // const [currentGroupName, setCurrentGroupName] = useState('')

  // // state for a new decision id that gets created
  // const [decId, setDecId] = useState()

  // // cheat code to pass options around
  // const [createdOptions, setCreatedOptions] = useState([])

    // const [allJoints, setallJoints] = useState([{
  //   decision_id: null,
  //   group_name: ''

  // {<Home 
  //   // onCurrentUser={(newUser)=>setCurrentUser(newUser)}
  //   // onCurrentGroupName={(newGroupName)=>setCurrentGroupName(newGroupName)}
  //   // onHasLoggedIn={() => setHasLoggedIn(true)}
  //   // hasLoggedIn={hasLoggedIn}
  //   // username={currentUser.username}
  //   // groupname={currentUser.groupname}
  //   />
  // }>