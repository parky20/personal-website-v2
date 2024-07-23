import { Project } from "@/lib/utils";
import CurrentProjects from "./CurrentProject";
import ProjectCard from "./ProjectCard";
import SectionContainer from "./SectionContainer";

export default function ProjectSection() {  
    const projects: Project[] = [
        {
            img: "/1.png",
            color: "bg-[#81d5a1]",
            title: "SIN Website",
            descr: "A marketing website for Sustainable Innovation Network, a student-led organization.",
            lang: ["React", "Tailwind CSS", "Gatsby", "Contentful"],
            href: "https://sin-neu.netlify.app/"
        }, 
        {
            img: "/2.png",
            color: "bg-[#deb1b1]",
            title: "Trivia Virtual Platform",
            descr: "A Trivia Area feature to the virtual meeting platform Covey.town.",
            lang: ["React", "Typescript", "Chakra UI", "Tiled", "REST API"] 
        },
        {
            img: "/3.png",
            color: "bg-[#b1cfd9]",
            title: "Brainflex",
            descr: "Mobile Application for Memory Sequence Game",
            lang: ["Kotlin", "Go", "AWS", "Postgres DB", "REST API"] 
        },
        {
            img: "/4.png",
            color: "bg-[#e9e0d4]",
            title: "Personal Website V1",
            descr: "Mobile Application for Memory Sequence Game",
            lang: ["HTML/CSS", "Javascript"],
            href: "https://yunip20.github.io/YP-Portfolio/"
        }
    ];

    return (
        <SectionContainer sectionTitle="PROJECTS">
            <div className="px-10 flex flex-col items-stretch tablet:px-0">
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-x-10 gap-y-10">  
                    {projects.map(project => (
                        <ProjectCard key={project.title} project={project} isOngoing={false}/>
                    ))}
                </div>  
                <CurrentProjects />  
            </div> 
        </SectionContainer>
    );
}
