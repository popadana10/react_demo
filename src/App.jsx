import './App.css';
import Box from './Box';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(100)
  const [persons, setPersons] = useState([
    {name:' Dana', title:' Web Developer', location:' Helsinki'},
    {name:' Marian', title:' Engineer', location:' Roman'}, 
    {name:' Teodor', title:' Web Developer', location:' Espoo'}
  ]);

  return(
    <>
    <p>Counter: {counter}</p>
    {persons.map((person) => (
      <>
      <Box
      name={person.name}
      title={person.title} 
      location={person.location}/>
      
      </>
      ))}
    </>
  );
}

export default App;