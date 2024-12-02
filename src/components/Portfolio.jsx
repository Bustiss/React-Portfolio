import React, { useState } from 'react';
import Projects from './Projects';
import '../App.css';

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Projects.length) % Projects.length);
  };

  return (
    <div className="project-page">
      <div className="left-side">
        <div className="project-wheel">
          {Projects.map((project, index) => (
            <div
              key={index}
              className={`project-item ${index === currentIndex ? 'active' : ''}`}
              style={{
                transform: `rotateX(${(index - currentIndex) * 45}deg) translateZ(300px)`,
              }}
            >
              <img className="project-image" src={project.image} alt={project.name} />
              <div className="project-name">{project.name}</div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={handlePrev}>⬆</button>
          <button onClick={handleNext}>⬇</button>
        </div>
      </div>

      <div className="right-side">
        <h1>{Projects[currentIndex].name}</h1>
        <p>{Projects[currentIndex].description}</p>
        <p style={{display:'flex', justifyContent:'center',fontSize:'20px', color:'red'}}>**Projects and Links being Updated**</p>
      </div>
    </div>
  );
};

export default Portfolio;