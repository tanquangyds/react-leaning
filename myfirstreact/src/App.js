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


  // const useNameChangeHandler = (event)  => {
  //   setUsername(event.target.value);
  // }
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
