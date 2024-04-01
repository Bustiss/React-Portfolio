import Projects from './Projects';

export const Portfolio = () => {

    const pageShift = {
        color: 'black',
        fontSize: '50px',
        fontFamily: 'Protest Riot',
    }

    const bioStyle = {
        color: 'black',
        fontSize: '20px',
        fontFamily: 'Protest Riot',
        textAlign: "center",
    }

    const projectNameStyle = {
        fontFamily: 'Protest Riot',
        

    }

return (
    <div className="project-page">
        <h1 style={pageShift}>Portfolio</h1>
        <p style={bioStyle}>Here are some of my projects. Click on the images to view the projects Live...<br/> CLICK the link below to view Repositories for each Project</p>
        <a href="https://github.com/Liiv-Dev" target="_blank" rel="noopener noreferrer">https://github.com/Liiv-Dev</a>
    <div className="project-container">
        {Projects.map((project, index) => (
            <a className="project" href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                <img className="project-image" src={project.image} alt={project.name} />
                <div className="project-info">
                <h1 style={projectNameStyle}>{project.name}</h1>
                <p>{project.description}</p>
                </div>
            </a>
        ))}
        </div>
    </div>
    );
};