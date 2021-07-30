import { Headline } from '../reusable/headline/Headline';
import './home.css';
import photo from './sadGif.gif';
import { Sidebar } from './sidebar/Sidebar';
import tony from './tony.jpg';

export const Home = () => {
    return <div id="homepage">
        <Headline>LOCAL MAN SHOWCASES MARKETABLE SKILLS</Headline>
        <div id="content-container">
            <Sidebar />
            <div id="projects">
                <h3 className="sub-heading">Some of My Projects</h3>
                <article className="project-article">
                    <h4 className="article-title">Send a Demo</h4>
                    <img className="project-image" src={photo} alt="Send A Demo" />
                    <p>Send a demo is an app made for recording and uploading audio to share with your friends. I worked with a friend over the course of a couple months adding various features, fixing bugs, and collaborating regularly. </p>
                    <p className="project-tools">Built with React, CSS, HTML, Node.js, Express, MongoDB</p>
                    <div className="project-button-container">
                        <button className="project-button">See More</button>
                        <button className="project-button">GitHub</button>
                    </div>
                </article>

                <article className="project-article">
                    <h4 className="article-title">Tony the Tiger Mobile Game for Kids and Cereal Fans</h4>
                    <img className="project-image" src={tony} alt="Tony the Tiger" />
                    <p>Send a demo is an app made for recording and uploading audio to share with your friends. I worked with a friend over the course of a couple months adding various features, fixing bugs, and collaborating regularly. </p>
                    <p className="project-tools">Built with React, CSS, HTML, Node.js, Express, MongoDB</p>
                    <div className="project-button-container">
                        <button className="project-button">See More</button>
                        <button className="project-button">GitHub</button>
                    </div>
                </article>
            </div>
        </div>
    </div>
}