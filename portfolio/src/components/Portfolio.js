import Projects from './Projects';

export const Portfolio = () => {

return (
    <div className="project-page">
    <div className="project-container">
        {Projects.map((project, index) => (
            <a className="project" href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                <img className="project-image" src={project.image} alt={project.name} />
                <div className="project-info">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                </div>
            </a>
        ))}
        </div>
    </div>
    );
};