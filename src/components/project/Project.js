import { useParams } from "react-router-dom"

export const Project = () => {

    const { projectName } = useParams();

    return <div style={{textAlign: "center"}}>{projectName}</div>
}