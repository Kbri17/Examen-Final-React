import React, { useState } from 'react';
import './App.css'


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs  
  const [name, setName] = useState('');
  
  return (
    <div className="App">
      <h1>Login</h1>
      <form>{<input
  type="text"
  value={name}
  onChange={(e) => {
    const { value } = e.target
    // more code...
    this.setState({ name: value })
  }}
/>}</form>
    </div>
  );
}

export default App;
