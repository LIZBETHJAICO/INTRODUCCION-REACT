import React, { useState } from 'react';
import MyComponent from './MyComponet'
import logo from './logo.svg';
import './App.css';

function App() {
  const [ count, setCount ] = useState(0)

  const addMount = () => {
    setCount(count+1)
  } 

  const removeMount = () => {
    setCount(count-1)
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent name="Johan"/>
        <button onClick={addMount}>
          +
        </button>
        <button onClick={removeMount}>
          -
        </button>
        <h1>{count}</h1>
      </header>
    </div>
  );
}

export default App;
