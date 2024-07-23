'use client';

import Experience from "@/components/Experience";
import MaskedCursor from "@/components/MaskedCursor";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
export default function Home() {     
  return (  
    
    <div className="flex flex-col justify-center items-center"> 
        <MaskedCursor/>
        {/* <AboutMe /> */}   
          <Experience />
          <ProjectSection />
          <Skills />      
    </div> 
  );
}
