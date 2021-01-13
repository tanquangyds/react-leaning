import React, { useState } from 'react';
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
  let person = null;

  if (showPerson) {
    person = 
      <div>
        {persons.map((person, index) => (
          <Person 
          name={person.name}
          age={person.age}
          click={() => deletePerson(index)}
          changed={(event) => nameChangeHandler(event, person.id)}
          key={person.id}/>
        ))}
    </div>
    style.backgroundColor = 'red'
  }
  return (

    <div className="App">
      <button style= {style} onClick={toggleHandler}
      alt={showPerson}
      >Toggle</button>
      {person}
    </div>
  )
}

export default App;
