import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name}. I'm {props.age} years old</p>
            <input onChange={props.changed}></input>
        </div>
    )
}

export default person;