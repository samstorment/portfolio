import { ProjectHome } from "components/home/project-home/ProjectHome";
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
            <ProjectHome
                key={p.id}
                title={p.title}
                thumbnail={p.thumbnail}
                description={p.description}
                tools={p.tools}
                id={p.id}
                github={p.github}
                website={p.website}
            />
        ))}
    </div>
}