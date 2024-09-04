'use client'
import { cn, Project } from "@/lib/utils";
import GithubIcon from "@/ui/GithubIcon";
import LinkIcon from "@/ui/LinkIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import Languages from "./Languages";

type ProjectCardProps = {
    project: Project
    isOngoing: boolean
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project, isOngoing }) => {
    return (
        <motion.div
            whileInView="visible"
            initial="hidden"
            transition={{ duration: 1.5, type: "spring" }}
            variants={{
                visible: { transform: "translateY(0px)" },
                hidden: { transform: "translateY(50px)" },
            }}
            key={project.title}
            className={`flex flex-col justify-between font-sans`} 
        > 
            <div className={cn(project.color, 'rounded-md')}>
                <Image className="mx-auto inset-0" width={600} height={400} alt={project.title} src={project.img} /> 
            </div>  
            <div className="flex flex-col items-start p-3"> 
                <span className="text-xl font-semibold dark:text-dark-title">{project.title}</span>
                <p className=" font-light">{project.descr}</p>
                <Languages languages={project.lang} /> 
            </div> 
            <div className="flex space-x-3 px-3">
                    <GithubIcon border={false}/>   
                    {project.href && (<LinkIcon href={project.href }/>)}
            </div> 
        </motion.div>
    );
};

export default ProjectCard;
