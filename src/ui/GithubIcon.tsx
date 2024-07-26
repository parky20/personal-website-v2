import { FiGithub } from "react-icons/fi"
import LinkedIcon from "./LinkedIcon"

type LinkedIconProps = {
    border: boolean
}
const GithubIcon: React.FC<LinkedIconProps> = ({border}) => {
    return (
        <LinkedIcon href="https://github.com/yunip20"><FiGithub/></LinkedIcon>
    )
}

export default GithubIcon