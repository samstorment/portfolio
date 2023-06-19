import { Headline } from "../reusable/headline/Headline";
import "./contact.css";

export const Contact = () => {
    return <div>
        <Headline>CONTACT INFORMATION</Headline>
        <address id="contact-information">
            <ul>
                <li><a href="mailto:samstorment@proton.me">samstorment@proton.me</a></li>
            </ul>
        </address>
    </div>
}