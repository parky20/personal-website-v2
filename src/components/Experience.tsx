'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Colors } from "./../lib/utils";
import SectionContainer from "./SectionContainer";

export default function Experience() {
    const [current, setCurrent] = useState(0);  
    const [borderBottom, setBorderBottom] = useState(false);  
    //  ["Northeastern", "SCOUT", "SNET", "The Broad Institute"]
    const workList = [{
        company: "Scout",
        position: "Technical Lead",
        date: "Jan - May 2024",
        dscr: [
            "Collaborated with designers to conduct user research, and brand exercises to implement a marketing website.",
            "Integrated Contentful to manage 50+ pieces of content, enabling future adjustments for clients.",
            "Led a cross-functional team to deliver low-fidelity designs and websites, achieving a 98% completion rate."
        ]
    }, {
        company: "Northeastern",
        position: "Teaching Assistant for Fundamentals of Software Engineering",
        date: "Jan - May 2024",
        dscr: [
            "Spearheaded 12-week sprints for 4 final group projects, overseeing development and weekly sprint reviews.",
            "Conducted 5.5 hours of weekly office hours to mentor and assist students with debugging and course materials.",
            "Regularly communicated with instructors for grading 40+ exams, assessments, and in-class activities."
        ]
    }, {
        company: "SNET Systems",
        position: "In-house Solution Co-op",
        date: "Aug - May 2023",
        dscr: [
            "Employed the NeXt topology library to visualize network data through nodes and edges in a topology layout.",
            "Implemented Dijkstra’s algorithm to optimize shortest path network searches, and seamlessly integrated node tooltips, tracking capabilities, and a dynamic UI toolbar for topology adjustments using jQuery."
        ]
    }, {
        company: "Broad Institute \nof MIT and Harvard",
        position: "Software Engineer Co-op",
        date: "Jul - Dec 2022",
        dscr: [
            "Enhanced digital workspaces for multi-cloud support (Azure/GCP) as part of a full-stack workspaces team.",
            "Developed 50+ unit tests using Jest and Mockito, improving bug detection rate and code quality.",
            "Collaborated with the UX team to identify bottlenecks and implement a step-by-step wizard for first-time users, reducing user onboarding time by 25%."
        ]
    }]

    function handleClick(index: number) {  
        setCurrent(index); 
        console.log(current);
    }

    useEffect(() => { 
        const handleResize = () => {
            if (window.innerWidth < 979) { //extract this out
                setBorderBottom(true)
            } else {
                setBorderBottom(false)
            }
        };
        handleResize()
        // Add event listener for resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [borderBottom]);
    const {primary, opaque} = Colors
    return (
        <SectionContainer sectionTitle="EXPERIENCE">  
            <div className="px-10 grid grid-flow-row-dense text-base
                            laptop:grid-flow-col-dense h-52 mb-28 tablet:px-0 tablet:mb-8 laptop:mb-5">  
                <ul className="list-none mr-0 border-primary laptop:border-b-0 laptop:border-l-2 border-opacity-10
                                 h-max flex overflow-x-scroll 
                                 border-l-0 border-b-2 
                                laptop:flex-col laptop:mr-5">
                    {workList.map((w, index) => ( 
                        <motion.li key={index}  
                            className="p-2"
                            animate={{ 
                                borderLeft: !borderBottom && index === current ? `2px solid ${primary}`: 'none', 
                                borderBottom: borderBottom && index === current ? `2px solid ${primary}`: 'none', 
                                background: index === current ? `${opaque}`: 'none',
                                color: index === current ? `${primary}`: 'black'
                            }} 
                            > 
                            <button 
                                className="whitespace-pre laptop:whitespace-pre-line text-start text-black dark:text-dark-text"
                                onClick={() =>handleClick(index)}>{w.company}
                            </button>
                        </motion.li>
                    ))} 
                </ul>   
                {workList.map((w, index) => ( 
                    current === index && ( 
                        <motion.div key={index} initial={{opacity:0, x:0}} animate={{opacity: 1, transform: "translateX(5px)", transition: {duration: 0.5, ease: "easeIn"}}} className="flex-col mt-5 laptop:mt-0">
                            <span className="text-lg font-semibold dark:text-dark-title">{w.position} <span className="text-secondary font-bold">@{w.company}</span></span>
                            <p className="mt-2 font-mono text-sm">{w.date}</p> 
                            <div className="mt-5">
                                <ul className="list-none space-y-2">
                                    {w.dscr.map((d, index) => ( 
                                        <li key={index}><span className="mr-2 text-secondary">▹</span>{d}</li> 
                                    ))} 
                                </ul>
                            </div>  
                        </motion.div>)
                ))}  
            </div>  
        </SectionContainer> 
              
    )
}