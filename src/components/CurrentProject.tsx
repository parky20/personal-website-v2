import { Project } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

const CurrentProjects = () => {
    const ongoing: Project[] = [
        {
            title: "Tabi",
            color: "",
            img: "",
            lang: ["User Research", "Co-design", "Interview", "Competitive Analysis"],
            descr: "Tabi is an AI-generated web application that helps designers with generating and synthesizing a user journey mapping", 
        },
        {
            title: "Personal Website V2",
            color: "",
            img: "",
            lang: ["React", "Next", "Typescript", "Framer motion", "Tailwind CSS"],
            descr: "Improving on the user interface and experience of this website!", 
        }
    ];

    return (
        <div className="flex flex-col mt-10 space-y-10">
            <span className="font-sans text-lg">
                Currently Working On...
            </span>
            {ongoing.map((project) => (
                <ProjectCard key={project.title} project={project} isOngoing={true} />
            ))}
        </div>
    );
};

export default CurrentProjects;
