import React from 'react';
import './UserOutput.css';
const userOutput = (props) => {
    return(
    <div className="UserOutput">
        <p>Some random text!</p>
        <p>I hope it will be overritten</p>
        <p>Your usename is: {props.username}</p>
    </div>
    );
    
};

export default userOutput;
