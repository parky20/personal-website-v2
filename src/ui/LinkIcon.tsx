import { GoLinkExternal } from "react-icons/go";
import LinkedIcon from "./LinkedIcon";

type LinkIconProps = {
    href: string
}
const GithubIcon: React.FC<LinkIconProps> = ({href}) => {
    return (
        <LinkedIcon href={href}><GoLinkExternal/></LinkedIcon>
    )
}

export default GithubIcon