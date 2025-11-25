import React from 'react';
import Counter from './components/Counter';
import Login from './components/Login';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Lab Exercise 10</h1>
      <Login />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
