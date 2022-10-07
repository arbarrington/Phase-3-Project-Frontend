import React, {useState, useEffect} from "react";

export default function renderOpenDecisionCard({}){


    // acutally just holds all the commented out logic!


    return (

        <div>Howdy friends</div>

    )

      // function handleDeployDecisionLogic() {
  //   if (isLoggedIn) {
  //     allDecs.forEach((dec) => {
  //       console.log(dec)
  //     //   if (dec.group_name == currentGroup) {
  //     //     console.log(dec)
  //     //     setGroupDecs(groupDecs)
  //     //   }
  //     })
  //   }
  // }

        
  // console logs for testing
  // console.log('all decisions:',allDecs)
  // console.log('all options',allOpts)
  // console.log('all joints',allJoints)
  // console.log('current group:',currentGroup)


    // useEffect(() => {
    //     fetch('http://localhost:9292/decisions')
    //         .then(d => d.json())
    //         .then((d) => {
    //             setAllDecisions(d)
    //         })
    // },[])

    // useEffect(() => {
    //     fetch('http://localhost:9292/joints')
    //         .then(d => d.json())
    //         .then((d) => {
    //             setJointsData(d)
    //             console.log(d)
    //     })
    // },[])

            // execute extract decisions sequence
        // extractDecisionSequence(userData.groupname)   

       // make sure to change num to userID
//     function extractDecisionSequence(postedGroupName) {
//         let idArray = []
//         console.log(postedGroupName)
//         jointsData.filter(row => row.group_name==postedGroupName).forEach((row) => {
//             allDecisions.forEach((entry) => {
//                 if (row.decision_id == entry.id && !idArray.includes(entry.id)) {
//                     console.log(entry.id)
//                     idArray.push(entry.id)
//                 }
//             })
//         })
//         onMatchingDecisions(idArray)
//         console.log(idArray)
//     }


}








    // state variable that has all of that group's decisions (matched by groupname)
    // const [groupDecs, setGroupDecs] = useState([])

    // useEffect(() => {
    //     let decArray
    //         fetch('http://localhost:9292/decisions')
    //         .then(d => d.json())

        
    // },[])
    


    // useEffect(() => {
    //     let thingsToSet = []
    //     fetch('http://localhost:9292/decisions')
    //         .then(d => d.json())
    //         .then((d) => {
    //             matchingDecision.forEach((id_num) => {
    //                 d.forEach((entry) => {
    //                     if (entry.id == id_num) {
    //                         thingsToSet.push(entry)
    //                     }
    //             })
    //         })
    //         setUserFullDecision(thingsToSet)
    //     })
    // },[rerender])


    // useEffect(() => {
    //     let thingsToSet = []
    //     fetch('http://localhost:9292/options')
    //         .then(d => d.json())
    //         .then((d) => {
    //             matchingDecision.forEach((id_num) => {
    //                 d.forEach((entry) => {
    //                     if (entry.id == id_num) {
    //                         thingsToSet.push(entry)
    //                     }
    //                     // once state filled, render the cards
    //                     // then reset state
    //             })
    //         })
    //         setDecOptions(thingsToSet)
    //     })
    // },[rerender])


    // console.log('decion list group name', groupname)
    // console.log("some state businet", userFullDecision)
    // console.log('matching decion ids', matchingDecision)
    // console.log('created options', createdOptions)
    // console.log('options that already exist and match', decOptions)


    // options to render only exists when some options are created in create new
    // let optionsToRender

    // createdOptions.forEach(element =>
    //     optionsToRender.push(element)
    // )

    // console.log(optionsToRender)





    // console.log('options insdie dec card',options)
    // console.log(decision)
    
    // function handleVote(e) {
    //     console.log(e.target.id)
    //     console.log(e.target)
    //     fetch(`http://localhost:9292/options/${3}`,{method: 'PATCH',
    //     headers: {'Content-Type': 'application/json',},
    //     body: JSON.stringify({num_votes: e.target.value})})
    //     .then(res => res.json())
    // }
    // function displayOptions(optionArray) {
    //     return (
    //            optionArray.map((option) => {
    //                 if (option.decision_id == decision.id) {
    //                     return (
    //                         <label>
    //                         <input
    //                         id={decision.id}
    //                         type="number"
    //                         max={optionArray.length}
    //                         name="answer"
    //                         className="radio"
    //                         onChange={handleVote}
    //                         />{option.option_name}
    //                         </label>
    //                     )
    //                 }
    //             })
    //     )
    // }




      // // states of decId, options for if a new deicion is posted
  // const [newDecId, setNewDecId] = useState()
  // const [newOpts, setNewOpts] = useState([])

         //   {/* <input id="submitdecision" type="submit" value="Submit!" /> */}