import Projects from './Projects';

export const Portfolio = () => {

    const header = {
        height: '10vh',
        color: 'white',
        fontSize: '50px',
        fontFamily: 'Protest Riot',
    }

    const bioStyle = {
        color: 'cyan',
        fontSize: '15px',
        fontFamily: 'Protest Riot',
        textAlign: "center",
    }

    const projectNameStyle = {
        fontFamily: 'Protest Riot',
    }

return (
    <div className="project-page">
        <div>
        <h1 style={header}>Projects</h1>
        <p style={bioStyle}>Most Recent Projects</p>
        {/* <p style={bioStyle}>Here are some of my projects. Click on the images to view the projects Live...<br/> CLICK the link below to view Repositories for each Project</p> */}
        </div>

        <div className="project-container">
            {Projects.map((project, index) => (
            <a className="project" target="_blank" rel="noopener noreferrer" key={index} >
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