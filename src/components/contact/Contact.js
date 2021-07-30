import { Headline } from "../reusable/headline/Headline";
import "./contact.css";

export const Contact = () => {
    return <div>
        <Headline>CONTACT INFORMATION</Headline>
        <address id="contact-information">
            <ul>
                <li><a href="mailto:sjstorment22@gmail.com">sjstorment22@gmail.com</a></li>
                <li>618-335-6415</li>
            </ul>
        </address>
    </div>
}