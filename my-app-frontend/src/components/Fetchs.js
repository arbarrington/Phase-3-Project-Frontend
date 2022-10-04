import React, {useState, useEffect} from "react";

export default function Fetchs(){


    //Reads
    const readDecisions = 
        useEffect(() => {
            fetch('http;//localhost:9292/decisions')
            .then((d) => d.json()
            .then((d => (console.log(d)))))
        }, [])

    const readUsers = 
    useEffect(() => {
        fetch('http;//localhost:9292/users')
        .then((d) => d.json()
        .then((d => (console.log(d)))))
    }, [])

    const readJoints =
    useEffect(() => {
        fetch('http;//localhost:9292/joints')
        .then((d) => d.json()
        .then((d => (console.log(d)))))
    }, [])

    const readCompleted =
    useEffect(() => {
        fetch('http;//localhost:9292/completed')
        .then((d) => d.json()
        .then((d => (console.log(d)))))
    }, [])

    return(
        <div>hwody doodi from fetcherooni</div>
    )
}
