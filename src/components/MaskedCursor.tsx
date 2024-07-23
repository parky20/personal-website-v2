import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import './maskedCursor.css';

const MaskedCursor = () => {   
    const itemVariants: Variants = {
        phrase: {
          opacity: 1,
          y: 0,
          transition: { duration : 1}
        } 
    };
    const [mousePosition, setMousePosition] = useState({x: 0, y:0});  
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseMove = (e : MouseEvent) => {
        setMousePosition({x: e.clientX, y: e.clientY})
    } 
    const handleMouseEnter = () => {
        setIsHovered(true); 
    }; 
    const handleMouseLeave = () => {
        setIsHovered(false); 
    }; 
    useEffect(() => {  
        window.addEventListener('mousemove', handleMouseMove);  
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); 
    const size = isHovered ? 450 : 20;  
    return (
        <motion.div
            variants= {{ 
                phrase: {
                    transition: {    
                        delay: 1,
                        staggerChildren: 0.2
                    }
                }
            }}
         animate="phrase" className="flex flex-col items-center justify-center h-screen">   
            <motion.div  className="mask absolute flex flex-col items-center justify-center h-screen w-screen z-10"
                animate={{WebkitMaskSize: `${size}px`, WebkitMaskPosition: `${mousePosition.x- size/2}px ${mousePosition.y - size/2 }px`}} transition={{ease: "backOut"}}>
                <div className='flex flex-col items-start justify-center w-9/12 text-white drop-shadow-[289 px_2px_#000000] font-semibold text-3xl tablet:text-4xl laptop:text-5xl'>
                <motion.h1 initial={{opacity: 0, y: -100}} variants={itemVariants} className= "tablet:mb-4 mb-2">Hey, I&apos;m <span className="text-primary">Yuni Park!</span></motion.h1> 
                    <motion.h2 initial={{opacity: 0, y: -100}} variants={itemVariants} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}  className= "tablet:mb-4 mb-2">A people-focused thinker passionate about making meaningful interactions</motion.h2> 
                    <motion.h3 initial={{opacity: 0, y: -100}} variants={itemVariants}onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}  className= "text-xl tablet:text-2xl tablet:mb-4 mb-2 "> <span className="text-primary">✶</span> Recent Northeastern Khoury grad looking for new opportunities</motion.h3> 
                </div>  
            </motion.div>    
            <div onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave} className="font-normal absolute flex flex-col items-center justify-center w-screen">
                <div  className='flex flex-col items-start justify-center w-9/12 dark:text-white font-semibold text-3xl tablet:text-4xl laptop:text-5xl'>
                    <motion.h1 initial={{opacity: 0, y: -100}} variants={itemVariants} className= "tablet:mb-4 mb-2">Hey, I&apos;m <span className="text-primary">Yuni Park!</span></motion.h1> 
                    <motion.h2 initial={{opacity: 0, y: -100}} variants={itemVariants} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}  className= "tablet:mb-4 mb-2">A software engineer focused on building memorable interfaces and expereinces</motion.h2> 
                    <motion.h3 initial={{opacity: 0, y: -100}} variants={itemVariants}onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}  className= "text-xl tablet:text-2xl tablet:mb-4 mb-2 "> <span className="text-primary">✶</span> Recent Northeastern Khoury grad looking for new opportunities</motion.h3> 
                </div>  
            </div>  
        </motion.div>
    )
}

export default MaskedCursor