import { FiLinkedin } from "react-icons/fi"
import LinkedIcon from "./LinkedIcon"

type LinkedInProps = {
    border: boolean
}
const LinkedInIcon: React.FC<LinkedInProps> = ({border}) => {
    return (
        <LinkedIcon href="https://www.linkedin.com/in/yunyi-park/"><FiLinkedin/></LinkedIcon>  
    )
}

export default LinkedInIcon