import React, {useState, useEffect} from "react";
import DecisionCard from "./DecisionCard";
import {v4 as uuid} from "uuid";


// export default function DecisionList({allDecs, currentGroup, allOpts, allJoints}){
export default function DecisionList({groupDecs, currentGroup, groupOpts }){

    function handleDelete(dec) {
        console.log(dec)
        fetch(`http://localhost:9292/decisions/${dec.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dec)
        })
    }

    function handlePatch(dec, opt) {
        console.log(dec)
        console.log(opt)
    }

// like the filtering for matching decions logic probs should live here and I tried to do that but state was making it a bitch so
// i pushed it all up to app so that the state would be updated by the time it got here

return (
    <div>
        {groupDecs.length > 0 ?
            <div>
                {groupDecs.map((dec) => 
                    <div key={uuid()}>
                        <DecisionCard 
                            options={groupOpts} 
                            decision={dec} 
                            currentGroup={currentGroup}
                            handleDelete={() => handleDelete(dec)}
                            handlePatch={(opt) => handlePatch(dec, opt)} />
                    </div>
                )}
            </div>
        :
        <p>add some decions to decide on for your group!</p>
        }
    </div>
)
}

// console.log('decs inside declist', groupDecs)
// console.log('opts inside declist', groupOpts)
// console.log('group inside declist', currentGroup)