import Projects from './Projects';

export const Portfolio = () => {

    const projects = Projects.map((project, index) => {
        return (
            <div key={index} className="project">
                <div className="project-image">
                    <img src={project.image} alt={project.name} />
                </div>
                <div className="project-info">
                    <p>{project.name}</p>
                    <p>{project.description}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="layout">
            <h1 className="title">Projects</h1>
            <div id="Portfolio" className="project-container">
            {projects}
        </div>
        </div>
    )
}