import React from 'react';
import logo from './logo.svg';
import './App.css';
import Something from './components/Something';

import { Navigatebar } from './components/Navigatebar';
import { Wrapper } from './components/Wrapper';
import { useRoutes } from 'hookrouter';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { Career } from './pages/Career';

import BackgroundImage from './assets/images/background.jpg';


const routes = {
  // '/': () => <Home/>,
  // '/about*': () => <About/>,
  '/': () => <About/>,
  '/About': () => <About/>,
  '/Career': () => <Career/>,
  // '/contact/:name': ({ name }) => <Contact name={name} />,
  '/contact': () => <Contact/>
}

function App() {
  const match = useRoutes(routes);
  return (
    <div className="App">      
      {/* <img src={BackgroundImage} className="profile-img" alt="Julian Allotta"></img>  */}
      
      <Wrapper>
        <Navigatebar />
        {match || <NotFound />}
      </Wrapper>
      {/* <header className="App-header">
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
        <Something></Something>
      </header> */}
    </div>
  );
}

export default App;
