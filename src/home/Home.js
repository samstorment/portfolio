import './home.css';
import photo from './sadGif.gif';
import tony from './tony.jpg';

export const Home = () => {
    return <div>
        <h2 id="headline">LOCAL MAN SHOWCASES MARKETABLE SKILLS</h2>
        <div id="content-container">
            <aside id="sidebar">
                <article className="sidebar-article">
                    <h4 className="article-title">A Bit About Me</h4>
                    <p>Hi, my name is Sam Storment. I'm a recent computer science graduate seeking a full time web developer position. I've worked with lots of stuff in the past, but my favorite is React, Node.js, Express, and MySQL. When I'm not programming, I'm watching baseball, playing some videogames, taking my dog for a well deserved walk, or hanging out with my friends. </p>
                </article>
                <article className="sidebar-article">
                    <h4 className="article-title">My Skills</h4>
                    <p>I feel pretty darn confident with JavaScript, HTML, CSS, React, and Node.js. The standard web dev stuff. I've got some experience with C#, Java, Python, and C++ thanks to some school projects. Git and GitHub are my go to for version control.</p>
                </article>
            </aside>
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
        {/* <div id="img-container">
            <img src={photo} alt="Albert" />
            <p>A Little Bit About Myself </p>
        </div> */}
    </div>
}