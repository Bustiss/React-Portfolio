import React from 'react';
import '../App.css'; // Imports App.css for styling

const Projects = [
  {
    name: 'Project 1',
    description: 'Description of Project 1',
    image: 'path/to/image1.jpg',
  },
  {
    name: 'Project 2',
    description: 'Description of Project 2',
    image: 'path/to/image2.jpg',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className="project-page">
      <div>
        <h1 style={{ fontSize: '30px', fontFamily: 'Protest Riot', textAlign: 'center' }}>Projects</h1>
        <p style={{ fontSize: '15px', fontFamily: 'Protest Riot', textAlign: 'center' }}>Most Recent Projects</p>
        <p style={{ fontSize: '15px', fontFamily: 'Protest Riot', textAlign: 'center' }}>Page under maintenance</p>
      </div>

      <div className="project-container">
        {Projects.map((project, index) => (
          <div className="project" key={index}>
            <img className="project-image" src={project.image} alt={project.name} />
            <div className="project-info">
              <h1 style={{ fontFamily: 'Protest Riot' }}>{project.name}</h1>
              <p>{project.description}</p>
              {/* Replace <a> with <button> */}
              <button className="project-link" disabled>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;