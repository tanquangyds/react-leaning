import React, { useState } from 'react';
import './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

function App(props) {
  
  const [persons, setPersons] = useState(
    [
      {id: 0, name: 'Quang', age: '28'},
      {id: 1, name: 'Quynh', age: '28'},
      {id: 2, name: 'Sushi', age: '0.5'},
    ]
  )
  const [showPerson, setShowPerson] = useState(false)
  
  console.log(persons)


  const deletePerson = (indexToRemove) => {
    var newPersons = [...persons];
    newPersons.splice(indexToRemove, 1);
    setPersons(newPersons);
  }
  

  const nameChangeHandler = (event, index) => {
    const personIndex = persons.findIndex(p => {
      return p.id === index;
    })
    const person = {...persons[personIndex]}
    person.name = event.target.value
    const newPersons = [...persons]
    newPersons[personIndex] = person
    setPersons(newPersons)
  }
  const doseShow = showPerson
  const toggleHandler = ()  => {
    setShowPerson(!doseShow)
  }
  
  let person = null;

  if (showPerson) {
    person = 
        <Persons 
         persons={persons}
         click={deletePerson}
         changed={nameChangeHandler}/>
  }
  return (

    <div className="App">
      <Cockpit 
       toggled={toggleHandler}
       showPerson={showPerson}/>
      {person}
    </div>
  )
}

export default App;
