import { Headline } from "../reusable/headline/Headline";
import pdf from "./resume.pdf";

export const Resume = () => {
    return <div>
        <Headline>RESUME</Headline>
        <iframe src={`${pdf}#zoom=FitW`} width="100%" height="1200px" title="resume"></iframe>
    </div>
}