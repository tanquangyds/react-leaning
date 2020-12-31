import React from 'react';

const useOutput = (props) => {
    return (
        <div>
            <p>UserName: {props.userName}</p>
            <p>I'll overwrite here</p>
        </div>
    )
}

export default useOutput;