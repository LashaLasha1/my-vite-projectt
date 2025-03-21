

import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [messageA, setMessageA] = useState("A ბარათი!");
  const [messageB, setMessageB] = useState("B ბარათი!");

  
  
  return (
    <div className="App">
      <h1>Welcome to My App!</h1>
      
      
      <div className="component">
        <h2>A ბარათი</h2>
        <p>{messageA}</p>
      </div>
      
      
      <div className="component">
        <h2>B ბარათი</h2>
        <p>{messageB}</p>

      </div>
    </div>
  );
}

export default App;
