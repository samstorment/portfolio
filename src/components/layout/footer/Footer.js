import { Link, useHistory, useLocation } from "react-router-dom";
import "./footer.css";


export const Footer = () => {

    const location = useLocation();
    const history = useHistory();

    const scrollTop = () => {

        if (location.pathname === '/') {
            window.scrollTo({
                top: 0, left: 0, behavior: 'smooth'
            });
        } else {
            history.push('/');
        }

    }

    return <footer>
        <button className="footer-button" onClick={scrollTop}>2021 Sam Storment</button>
        <Link to="/contact">contact</Link>
    </footer>
}