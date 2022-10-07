import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";
import {v4 as uuid} from "uuid";


// export default function DecisionList({allDecs, currentGroup, allOpts, allJoints}){
export default function DecisionList({groupDecs, currentGroup, groupOpts }){

console.log('decs inside declist', groupDecs)
console.log('opts inside declist', groupOpts)
console.log('group inside declist', currentGroup)


return(
    <div>
        {groupDecs.length > 0 ?
            <div>
                {groupDecs.map((dec) => 
                    <div>
                        <p>render was triggered</p>
                        <div key={uuid()}/>
                        <DecisionCard options={groupOpts} decision={dec}/>
                    </div>
                )}
            </div>
        :
        <p>add some decions to decide on for your group!</p>
        }
    </div>
)
}





    // // state that contains all of that groups decions
    // const [groupDecs, setGroupDecs] = useState([])

    // // state that contains all of that groups options (options for ALL DECS)
    // const [groupOpts, setGroupOpts] = useState([])

    // // states used just for proper use effect sequencing
    // const [triggerSecondUE, setTriggerSecondUE] = useState(false)
    // const [triggerThirdUE, setTriggerThirdUE] = useState(false)
    // const [triggerRender, setTriggerRender] = useState(false)

    // // looking through all of the joints to extract decion ids that correspond to the current group name
    // let matchingDecIds =[]
    // useEffect(() => {
    //     allJoints.forEach((joint) => {
    //         if (joint.group_name==currentGroup && !matchingDecIds.includes(joint.decision_id)) {
    //             matchingDecIds.push(joint.decision_id)
    //         }
    //     })
    //     setTriggerSecondUE(true)
    // },[allJoints])

    // // looking through all of the decions and filling out a state of group decs where the dec id and group name math (via joins table beta)
    // let matchingDecFull = []
    // useEffect(() => {
    //     allDecs.forEach((dec) => {
    //         matchingDecIds.forEach((matchingId) => {
    //             if (dec.id == matchingId && !matchingDecFull.includes(dec)) {
    //                 matchingDecFull.push(dec)
    //             }
    //         })
    //     })
    //     setGroupDecs(matchingDecFull)
    //     setTriggerThirdUE(true)
    // },[])

    // // looking through all the options and extracting ones that have forein keys that match the current groups decions
    // // this will extract the options for ALL of the matching decions
    // // matching options will be passed to the render card which will filter out whcih ones to dsipaly!!
    // let matchingOptions = []
    // useEffect(() =>{
    //     allOpts.forEach((opt) => {
    //         groupDecs.forEach((dec) => {
    //             if (opt.decision_id == dec.id) {
    //                 matchingOptions.push(opt)
    //             }
    //         })
    //     })
    //     setGroupOpts(matchingOptions)
    //     setTriggerRender(true)
    //     //setTimeout(() => {setTriggerRender(true)}, 4000);
    // },[])

    // // setTimeout(() => {console.log('delayed group decs', groupDecs)}, 2000);
    // // setTimeout(() => {console.log('delayed group opts', groupOpts)}, 2000);