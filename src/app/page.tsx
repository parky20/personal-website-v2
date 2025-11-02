import Experience from "@/components/Experience";
import MaskedCursor from "@/components/MaskedCursor";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import Head from "next/head";
export default function Home() {     
  return (   
    <>
    <div id="root" className="flex flex-col justify-center items-center">
        <MaskedCursor />
        <Experience />
        <ProjectSection />
        <Skills />
      </div></> 
  );
}
