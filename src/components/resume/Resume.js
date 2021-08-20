import { Headline } from "../reusable/headline/Headline";
import pdf from "./resume.pdf";

export const Resume = () => {
    return <section id="resume">
        <Headline>RESUME</Headline>
        <iframe src={`${pdf}#view=fitH`} height="1200px" width="100%" title="resume"></iframe>
    </section>
}