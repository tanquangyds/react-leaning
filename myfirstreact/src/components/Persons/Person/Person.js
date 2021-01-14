import React from 'react';

import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name}. I'm {props.age} years old</p>
            <input onChange={props.changed} className="input"></input>
        </div>
    )
}

export default person;