import React from 'react';

const useInput = (props) => {
    return (
        <input type="text" onChange={props.changed}></input>
    )
}

export default useInput;