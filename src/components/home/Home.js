import { Headline } from '../reusable/headline/Headline';
import { Sidebar } from './sidebar/Sidebar';
import { ProjectList } from 'components/project-list/ProjectList';
import './home.css';

export const Home = () => {
    return <div id="homepage">
        <Headline>LOCAL MAN SHOWCASES MARKETABLE SKILLS</Headline>
        <div id="content-container">
            <Sidebar />
            <ProjectList />
        </div>
    </div>
}