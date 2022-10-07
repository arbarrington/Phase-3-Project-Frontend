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




