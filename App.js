import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import { useState } from 'react';
import ValueContext from './ValueContext';

function App() {
  //let [number, setNumber] = useState (1);
  let value = useState (48);

  return (
    <ValueContext.Provider value = {value}>
      <div>
      Hello World!
      <Parent></Parent>
    </div>
    </ValueContext.Provider>
    
  );
}

export default App;
