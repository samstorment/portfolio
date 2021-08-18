import { Link } from "react-router-dom";
import './project-home.css';

export const ProjectHome = ({title, thumbnail, description, tools, id, github, website}) => {
        
    return  <article>
        <h4 className="article-title">{title}</h4>
        <div className="project-image-container">
            <img className="project-image" src={thumbnail} alt={title} />
        </div>
        <p>{description}</p>
        <p className="project-tools">{tools}</p>
        <div className="project-button-container">
            <Link to={`/projects/${id}`} className="project-button">See More</Link>
            {github &&<a href={github} className="project-button" target="_blank" rel="noopener noreferrer">GitHub</a>}
            {website && <a href={website} className="project-button" target="_blank" rel="noopener noreferrer">Live Demo</a>}
        </div>
    </article>
}