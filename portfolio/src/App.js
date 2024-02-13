import './App.css';
import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeLink, setActiveLink] = useState('About');

  const renderTab = () => {
    switch (activeLink) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  }
  
  return (
    <div className="App">
      <Header setActiveLink={setActiveLink} activeLink={activeLink}/>
      <main>{renderTab()}</main>
      <Footer />
    </div>
  );
}

export default App;
