import React, { useState, useCallback } from 'react';
import './App.css';

import Person from './Person/Person'
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

function App(props) {

  const [persons, setPersons] = useState(
    [
      {id: 0, name: 'Quang', age: '28'},
      {id: 1, name: 'Quynh', age: '28'},
      {id: 2, name: 'Sushi', age: '0.5'},
    ]
  )
  const [showPerson, setShowPerson] = useState(true)
  
  console.log(persons)


  const deletePerson = (indexToRemove) => {
    var newPersons = [...persons];
    newPersons.splice(indexToRemove, 1);
    setPersons(newPersons);
  }
  

  const useNameChangeHandler = useCallback(
    (event, index) => {
      const personIndex = persons.findIndex(p => {
        return p.id === index;
      })
      const person = {...persons[personIndex]}

      person.name = event.target.value
      const newPersons = [...persons]
      newPersons[personIndex] = person
      setPersons(newPersons)
    }
  )
  const doseShow = showPerson
  const toggleHandler = ()  => {
    setShowPerson(!doseShow)
  }

  let person = null;

  if (showPerson) {
    person = 
      <div>
        {persons.map((person, index) => (
          <Person 
          name={person.name}
          age={person.age}
          click={() => deletePerson(index)}
          changed={useNameChangeHandler.bind(this)}
          key={person.id}/>
        ))}
    </div>
  }

  return (
    <div className="App">
      <button onClick={toggleHandler}>Toggle</button>
      {person}
    </div>
  )
}

export default App;
