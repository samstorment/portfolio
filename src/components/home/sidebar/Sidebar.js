import './sidebar.css';

export const Sidebar = () => {
    return   <aside id="sidebar">
        <article className="article">
            <h4 className="article-title">A Bit About Me</h4>
            <p>Hi, my name is Sam Storment. I'm a recent computer science graduate seeking a full time web development position. I've spent time learning about various areas of computer science like programming language design, data structures and algorithms, artificial intelligence, and operating systems. However, the web won me over due to the ease of creating polished user interfaces. My favorite tools to use are React, Node.js, Express, and MySQL. When I'm not writing code, I'm watching baseball, playing some video games, taking my dog for a well deserved walk, or hanging out with my friends.</p>
        </article>

        <article className="article">
            <h4 className="article-title">My Skills</h4>
            <p>I feel really confident with JavaScript, HTML, CSS, React, and Node.js. For databases, SQL is my go to, with MySQL being the one I've used most. I've used MongoDB a bit as well. I've got some experience with C#, Java, Python, and C++ thanks to some school projects. I've briefly dabbled with other technologies like GoLang, Haskell, Svelte, and Rust in my personal time. I used Git and GitHub for version control.</p>
        </article>
    </aside>
}