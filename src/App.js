import React from 'react';
import './App.css';

import { Navigatebar } from './components/Navigatebar';
import { Wrapper } from './components/Wrapper';
import { useRoutes } from 'hookrouter';

import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { Career } from './pages/Career';

const routes = {
  '/': () => <About/>,
  '/About': () => <About/>,
  '/Career': () => <Career/>,
  '/contact': () => <Contact/>
}

function App() {
  const match = useRoutes(routes);
  return (
    <div className="App">      
      <Wrapper>
        <Navigatebar />
        {match || <NotFound />}
      </Wrapper>
    </div>
  );
}

export default App;
