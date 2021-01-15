import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import { useState } from 'react';

function App() {
  let [number, setNumber] = useState (1);

  return (
    <div>
      Hello World!
      <Parent num={number}></Parent>
      <button onClick = {() => { setNumber (++number)}}>Update Number</button>
    </div>
  );
}

export default App;
