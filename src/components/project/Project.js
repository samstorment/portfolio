import projects from 'data/project-list.json';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Headline } from "components/reusable/headline/Headline";
import { FourOFour } from "components/FourOFour/FourOFour";
import './project.css';

export const Project = () => {

    const { projectName } = useParams();
    const [ project, setProject ] = useState(null);
    const [ showButtons, setShowButtons ] = useState(false);
 
    useEffect(() => {
        const [ proj ] = projects.filter(p => p.id === projectName);
        setProject(proj);
        setShowButtons(!!proj.github || !!proj.website);
    }, [projectName]);

    if (!project) return <FourOFour />;

    return <article>
        {/* <h4 className="article-title">{project.title}</h4> */}
        <Headline>{project.title.toUpperCase()}</Headline>
        {showButtons && <div className="project-button-container">
            {project.github && <a href={project.github} className="project-button" target="_blank" rel="noopener noreferrer">GitHub</a>}
            {project.website && <a href={project.website} className="project-button" target="_blank" rel="noopener noreferrer">Live Demo</a>}
        </div>}
        {project.images && project.images.map(img => {
            return <>
                <h4 className="article-title">{img.title}</h4>
                <div className="project-image-container">
                    <img className="project-image" src={img.path} alt={img.title} />
                </div>
                <p style={{margin: "5px 0px 20px 0px"}}>{img.description}</p>
            </>
        })}
    </article>
}