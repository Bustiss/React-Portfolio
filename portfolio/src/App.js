import './App.css';
import React from 'react';
import { Header } from './components/Header';
// import { About } from './components/About';
import { Portfolio } from './components/Portfolio';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Portfolio />
    </div>
  );
}

export default App;
