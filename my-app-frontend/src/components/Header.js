import React, {useState, useEffect} from 'react';

export default function Header({username, groupname}){


    return(

        <div>
            <p>{username}</p>
            <p>{groupname}</p>
        </div>

        <div className='header'>Gaggle</div>

    )
    
}

