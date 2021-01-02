import React from 'react';

const character = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
    }
    return (
        <div style={style}>
            <p onClick={props.delete}>{props.char}</p>
        </div>
    )
}

export default character;