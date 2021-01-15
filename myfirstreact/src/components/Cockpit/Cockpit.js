import React, {useEffect} from 'react';

const Cockpit = (props) => {

    // useEffect(() => {
        
    //     return () => {
    //         console.log('will unmount 1')
    //     }
    // }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            alert('run')
        })
        // return () => {
        //     clearTimeout(timer)
        // }
    }, []);

    const style = {
        padding: '16px',
        margin: '16px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        border: 'none',
        outline: 'none',
    }
    if (props.showPerson) {
        style.backgroundColor = 'green';
    } else { 
        style.backgroundColor = 'red';
     }
    return (
        <button style= {style} onClick={props.toggled}
        alt={props.showPerson}>
            Toggle
        </button>
    )
}
export default Cockpit;