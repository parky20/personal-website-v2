'use client';

import Experience from "@/components/Experience";
import MaskedCursor from "@/components/MaskedCursor";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import { useEffect } from "react";
export default function Home() {    

  useEffect(() => {   
    console.log(('theme' in localStorage) === null)
    if (localStorage.theme === 'dark' || (('theme' in localStorage) === null && (window.matchMedia('(prefers-color-scheme: dark)').matches))) {
      document.documentElement.classList.add('dark')  
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

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
