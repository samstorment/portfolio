import { Link } from "react-router-dom";
import './project.css';

export const Project = ({title, image, description, tools, link, github}) => {
    return  <article>
        <h4 className="article-title">{title}</h4>
        <div className="project-image-container">
            <img className="project-image" src={image} alt={title} />
        </div>
        <p>{description}</p>
        <p className="project-tools">{tools}</p>
        <div className="project-button-container">
            <Link to={link} className="project-button">See More</Link>
            <a href={github} className="project-button" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    </article>
}