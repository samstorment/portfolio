import { Headline } from '../reusable/headline/Headline';
import { Project } from './project/Project';
import { Sidebar } from './sidebar/Sidebar';
import projects from './projects.json';
import './home.css';

export const Home = () => {
    return <div id="homepage">
        <Headline>LOCAL MAN SHOWCASES MARKETABLE SKILLS</Headline>
        <div id="content-container">
            <Sidebar />
            <div id="projects">
                <h3 className="sub-heading">Some of My Projects</h3>

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
        </div>
    </div>
}