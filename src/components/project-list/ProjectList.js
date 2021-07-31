import { Project } from "components/home/project/Project";
import { Headline } from "components/reusable/headline/Headline";
import projects from 'data/project-list.json';
import { useLocation } from "react-router-dom";

export const ProjectList = () => {

    const location = useLocation();

    return <div id="projects">
        
        {location.pathname === "/" 
            ? <h3 className="sub-heading">Some of My Projects</h3> 
            : <Headline>PROJECTS</Headline>
        }

        {projects.map(p => (
            <Project
                key={p.title}
                title={p.title}
                image={p.image}
                description={p.description}
                tools={p.tools}
                link={p.link}
                github={p.github}
            />
        ))}
    </div>
}