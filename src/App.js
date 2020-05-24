import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './containers/Navigation';
import Something from './components/Something';

import { Navbar } from './components/Navbar';
import { Wrapper } from './components/Wrapper';
import { useRoutes } from 'hookrouter';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';


const routes = {
  '/': () => <Home/>,
  '/about*': () => <About/>,
  '/contact/:name': ({ name }) => <Contact name={name} />,
}

function App() {
  const match = useRoutes(routes);
  return (
    <div className="App">      
      <Navigation />      
      <Wrapper>
        <Navbar />
        {match || <NotFound />}
      </Wrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React          
        </a> */}
        <Something></Something>
      </header>
    </div>
  );
}

export default App;
