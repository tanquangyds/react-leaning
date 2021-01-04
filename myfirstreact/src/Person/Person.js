import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 16px auto;
    padding: 16px;
    width: 500px;
    border: 1px solid rgb(173, 171, 171);
    background-color: #ccc;
    color: black;
    .input {
        outline: none;
    }
    :hover {
        background-color: rgba(173, 171, 171, 0.8);
    }
    @media (max-width: 600px) {
        background-color: red;
    }
`
// import './Person.css'
const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm a {props.name}. I'm {props.age} years old</p>
            <input onChange={props.changed} className="input"></input>
        </StyledDiv>
    )
}

export default person;