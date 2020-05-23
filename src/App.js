import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './containers/Nav';

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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React          
        </a>

        <div className="row">
          <div className="col-3">            
            <label>Enter your name</label>
            <input type="text" className="form-control"></input>        
          </div>
        </div>
        
        <Nav />
      </header>
    </div>
  );
}

export default App;
