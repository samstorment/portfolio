import { useHistory, useLocation } from "react-router-dom";
import "./footer.css";


export const Footer = () => {

    const location = useLocation();
    const history = useHistory();

    const scrollTop = () => {

        if (location.pathname === '/') {
            window.scrollTo({
                top: 0, left: 0, behavior: 'smooth'
            });

            console.log('wow');

        } else {
            history.push('/');

            console.log('wow');
        }

    }

    return <footer>
        <button className="footer-button" onClick={scrollTop}>2021 Sam Storment</button>
    </footer>
}