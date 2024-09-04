import SectionContainer from "./SectionContainer";

const skillsData = {
    LANGUAGES: [
        "Java",
        "Javascript",
        "Typescript",
        "SQL",
        "GraphQL",
        "C++",
        "Python",
        "Scala",
        "Kotlin",
    ],
    FRAMEWORKS: [ 
        "React", 
        "Node.js",
        "Next.js",
        "Convex", 
        "Gatsby",
        "Jest",
        "Express", 
        "Mockito", 
    ],
    LIBRARIES: [
        "jQuery",
        "Clerk",
        "React Flow", 
        "Zustand", 
    ],
    TOOLS: [
        "Bash",
        "Git & Github",
        "Chrome DevTools",
        "Swagger",
        "Jenkins",
        "MySQL",
        "LaTeX",
    ],
    DESIGN: [
        "Figma",
        "User Testing",
        "Wireframing",
        "Prototyping",
    ],
};

export default function Skills() {
    return ( 
            <SectionContainer sectionTitle="SKILLS">
                <div className="grid grid-cols-3 gap-x-24 gap-y-7 font-sans px-10
                                tablet:grid-cols-5 tablet:px-0">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="w-1/3">
                            <p className="mb-4 font-semibold dark:text-dark-title">{category}</p>
                            <div className="flex flex-col font-light">
                                {skills.map((skill) => (
                                    <p key={skill} className="text-nowrap">{skill}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer> 
    );
}
