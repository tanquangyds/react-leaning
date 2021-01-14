import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        padding: '16px',
        margin: '16px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        border: 'none',
        outline: 'none',
      }

    return (
        <button style= {style} onClick={props.toggled}
        alt={props.showPerson}>
            Toggle
        </button>
    )
}
export default cockpit;