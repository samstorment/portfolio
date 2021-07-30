import './sidebar.css';

export const Sidebar = () => {
    return   <aside id="sidebar">
        <article className="article">
            <h4 className="article-title">A Bit About Me</h4>
            <p>Hi, my name is Sam Storment. I'm a recent computer science graduate seeking a full time web developer position. I've worked with lots of stuff in the past, but my favorite is React, Node.js, Express, and MySQL. When I'm not programming, I'm watching baseball, playing some videogames, taking my dog for a well deserved walk, or hanging out with my friends.</p>
        </article>

        <article className="article">
            <h4 className="article-title">My Skills</h4>
            <p>I feel pretty darn confident with JavaScript, HTML, CSS, React, and Node.js. The standard web dev stuff. I've got some experience with C#, Java, Python, and C++ thanks to some school projects. Git and GitHub are my go to for version control.</p>
        </article>
    </aside>
}