import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { About } from './components/About'; // Import the About component
import { Portfolio } from './components/Portfolio'; // Import the Portfolio component
import { Resume } from './components/Resume'; // Import the Resume component
import './App.css';
// import Contact from './components/Contact'; // Uncomment if you want to use the Contact component

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
        {/* Navigation Bar */}
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#282c34', padding: '20px', margin: '10px', borderRadius: '30px' }}>
          <div>
            <img src='./images/profile-filler.jpg' alt="Will's portfolio" style={{ borderRadius: '50%', width: '80px', height: '80px' }} />
          </div>
          <div>
            <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: '28px', listStyleType: 'none', margin: 0, padding: 0, borderRadius: '10px' }}>
              <li>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'white' : 'black', backgroundColor: isActive ? 'black' : 'transparent', textDecoration: 'none', padding: '5px 10px', borderRadius: '8px' })}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/Portfolio" style={({ isActive }) => ({ color: isActive ? 'white' : 'black', backgroundColor: isActive ? 'black' : 'transparent', textDecoration: 'none', padding: '5px 10px', borderRadius: '8px' })}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/Resume" style={({ isActive }) => ({ color: isActive ? 'white' : 'black', backgroundColor: isActive ? 'black' : 'transparent', textDecoration: 'none', padding: '5px 10px', borderRadius: '8px' })}>Resume</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Dynamic Content Area */}
        <div style={{ flex: 1, padding: '10px' }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;