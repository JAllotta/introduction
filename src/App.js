import React from 'react';
import './App.css';
// import { Link, animateScroll as scroll } from "react-scroll";
// import { Wrapper } from './components/Wrapper';
// import { useRoutes, usePath } from 'hookrouter';

import { Contact } from './pages/Contact';
// import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { Career } from './pages/Career';
import { Hobbies } from './pages/Hobbies';
// import { Home } from './pages/Home';
// import { Page } from './components/Page';
import { Navigatebar } from './components/Navigatebar';


// import { withRouter } from 'react-router-dom'; 

// const routes = {
//   '/': () => <Home />,
//   '/About': () => <About />,
//   '/Career': () => <Career />,
//   '/Hobbies': () => <Hobbies />,
//   '/Contact': () => <Contact />
// }

function App() {
  // const match = useRoutes(routes);
  //const { location } = props;
  // const path = usePath();
  // return <span>Your current location: {path}</span>;
  // if (path === '/') {
  //   return <Home />;
  // }
  // var currentPage = "nav-link-current";
  
  // var Scroll = require('react-scroll');
  // var scroll = Scroll.animateScroll;
   
  // scroll.scrollToTop(options);
  return (
    <div className="App">
      <div className="med-container">
        <div className="med-menu">
          <Navigatebar />          
        </div>
        <div className="med-body">          
          <div id="about">
            <About />
          </div>
          <div id="career">
            <Career />
          </div>
          <div id="hobbies">
            <Hobbies />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
      {/* <About></About>
      <Career></Career>
      <Hobbies />
      <Contact /> */}
      {/* <Wrapper>     
        {match || <NotFound />}
      </Wrapper> */}
    </div>
  );
}

export default App;
