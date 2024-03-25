import './App.css';
import Box from './Box';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(100)

  return(
    <>
    <p>Counter: {counter}</p>
      <Box name=' Dana' title=' CTO' location=' Helsinki'/>
      <Box name=' Karin' title=' Designer' location=' Tartu'/>
      <Box name=' Kati' title=' Developer' location=' Far away'/>
    </>
  )
}

export default App;