import React from 'react';
const userInput = (props) => {
    const inpuStyle = {
        border: '2px solid red'

    };
    return(
        <input 
        style={inpuStyle}
        type="text" 
        onChange={props.change}
        value={props.username}
        />
    );
    
};

export default userInput;
