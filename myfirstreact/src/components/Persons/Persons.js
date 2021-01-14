import React from 'react';

import Person from './Person/Person';

const Persons = (props) => {
    return (
        props.persons.map((person, index) => (
            <Person 
            name={person.name}
            age={person.age}
            click={() => props.click(index)}
            changed={(event) => props.changed(event, person.id)}
            key={person.id}/>
        ))
    )
}
export default Persons;