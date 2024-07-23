import "../components/DarkModeSwitch.css";
import NavigationItem from "./Navigationitem";
export default function ProjectSection() { 
    return (
    <div className="hidden  
                tablet:flex tablet:items-center p-1 
                h-full relative 
                dark:bg-dark-background text-sm">
        <NavigationItem menu="home" href="/"/> 
        <NavigationItem menu="about me" href="/aboutMe"/> 
        <NavigationItem menu="resume" href="/404"/>  
    </div>   
    )
}