import React from 'react';
import './App.css';

import { Navigatebar } from './components/Navigatebar';
import { Wrapper } from './components/Wrapper';
import { useRoutes, usePath } from 'hookrouter';

import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { Career } from './pages/Career';
import { Hobbies } from './pages/Hobbies';
import { Home } from './pages/Home';
// import { withRouter } from 'react-router-dom'; 

const routes = {
  '/': () => <Home/>,
  '/About': () => <About/>,
  '/Career': () => <Career/>,
  '/Hobbies': () => <Hobbies/>,
  '/Contact': () => <Contact/>
}

function App() {
  const match = useRoutes(routes);
  //const { location } = props;
  const path = usePath();
  // return <span>Your current location: {path}</span>;
  if (path === '/'){
    return <Home/>;
  }  
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
