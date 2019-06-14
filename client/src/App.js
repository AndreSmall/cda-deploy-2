import React from 'react';
import logo from './logo.svg';
import './App.css';

const pingUrl = `${process.env.REACT_APP_BACKEND_SERVER || 'http://localhost:8080'}/ping`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href={`${pingUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Local Express Server ping
        </a>
      </header>
    </div>
  );
}

export default App;
