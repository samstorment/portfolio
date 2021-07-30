import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
    return <header>
        <Title />
        <h2 id="subtitle">ASPIRING WEB DEVELOPER</h2>
        <Navbar />
    </header>
}

const Title = () => {
    return <div id="title-container">
        <Link to="/" className="header-box" id="left-header-box">Home</Link>
        <h1 id="title">Sam Storment</h1>
        <Link to="/contact" className="header-box" id="right-header-box">Contact</Link>
    </div>
}

const Navbar = () => {
    return <nav>
        <Link to="/resume">Resume</Link>
        {/* target and rel for opening in a new tab */}
        <a href="https://github.com/samstorment" target="_blank" rel="noopener noreferrer">
            GitHub
        </a>
        <Link to="/projects">Projects</Link>
    </nav>
}