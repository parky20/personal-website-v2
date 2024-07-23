'use client'; 
import { motion } from "framer-motion";
 
export default function Projects() { 
  const languages = ["React.js", "Tailwind CSS", "Gatsby", "Contentful"]
  return (
    <div className="flex justify-center w-screen h-screen px-64 py-20 text-black">  
        <div className="flex justify-center p-10">
            <motion.img  
                animate={{y: 0 }}  
                initial={{scale: 0.8, y: 50 }}   
                transition={{
                  type: "smooth", 
                  duration: 2,  
                }}    
                src="/1.png"/>
        <h1>Sustainable Innovation Network Website</h1>
        <h2>Web Development, Low-fidelity Design, User Research</h2> 
        </div>   
    </div>
  );
}
