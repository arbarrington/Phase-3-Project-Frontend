import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";


// fecth from the decision db options
// display that db info '${}

export default function FinalDecision({updateDecision, fetchResource}){

    (updateDecision('localhost:9292/decision', 1))
    // console.log(fetchResource('http//:localhost9292/decisions'))

    return(
<div className="final-decision">final decision Time
</div>
    )
    
}