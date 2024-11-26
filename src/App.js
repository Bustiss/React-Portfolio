import './App.css';
import React from 'react';
// import { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// import { Header } from './components/Header';
import { About } from './components/About';
// import { Portfolio } from './components/Portfolio';
// import { Resume } from './components/Resume';
// import { Skills } from './components/Skills';
// import { Contact } from './components/Contact';
import { LeftNav } from './components/LeftNav';

function App() {
// const [activeLink, setActiveLink] = useState('About');

return (
  <div>
    <LeftNav />
    <ReactFullpage
      navigation
      sectionsColor={["#282c34", "#696969", "#282c34", "#282c34", "#282c34"]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <About />
            </div>
            {/*<div className="section">
              <Portfolio />
            </div>
            <div className="section">
              <Resume />
            </div>
            <div className="section">
              <Skills />
            </div>
            <div className="section">
              <Contact />
            </div> */}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
)
}

export default App;