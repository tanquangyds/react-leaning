import React, { useState } from 'react';


import Validation from './Validation/Validation';
import Character from './Charactor/Character';

import './App.css';

function App() {
  const [text, setText] = useState('');

  const changeTextHandler = (event) => {
    return (
      setText(event.target.value)
    )
  }
  console.log(text);

  const deleteCharHandler = (indexToRemove) => {
    const newText = text.split('');
    newText.splice(indexToRemove, 1);
    const updateText = newText.join('');
    setText(updateText);
  }

  return (
    <div className="App">
      <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!
        You'll also need to transform a string into a real array and then join it back into a string again to complete task 5 of the assignment.
        You can split a string into an array of its characters with the split('')  method. By passing just an empty string, it's split after every character.
        You may then re-create a string from that array by using join('')  - again, joining with an empty string as a separator
        </p>
        <input type="text" onChange={changeTextHandler} value={text}></input>
        <p>{text}</p>
        <Validation 
        input={text.length} />
        {text.split('').map((char, index) => {
          return <Character 
          char={char} 
          key = {index} 
          delete={() => deleteCharHandler(index)} />;
        })}
    </div>
  );
}

export default App;
