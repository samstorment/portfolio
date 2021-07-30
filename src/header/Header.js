import './header.css';

export const Header = () => {
    return <header>

        <div id="title-container">
            <div className="header-box" id="left-header-box">
                <a href="/">Home</a>
            </div>
            <h1 id="title">Sam Storment</h1>
            <div className="header-box" id="right-header-box">
                <a href="/contact">Contact</a>
            </div>
        </div>
        <h2 id="subtitle">ASPIRING WEB DEVELOPER</h2>
        <nav>
            <a href="/cool">Resume</a>
            <a href="https://github.com/samstorment" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            <a href="/cool">Projects</a>
        </nav>
    </header>
}