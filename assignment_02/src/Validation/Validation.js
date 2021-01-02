import React from 'react';

const validation = (props) => {
    return (
        <div>
            {props.input <= 5 ?
            <p>Text is too short</p> :
            <p>Text is long enough</p>}
        </div>
    )
}

export default validation;