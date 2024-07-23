
import GithubIcon from "@/ui/GithubIcon";
import LinkedInIcon from "@/ui/LinkedinIcon";
import SideBar from "@/ui/SideBars";
const Socials = () => {
    return (
    <SideBar left={true}>
        <GithubIcon border={false}/>
        <LinkedInIcon border={false}/> 
    </SideBar>)
}

export default Socials