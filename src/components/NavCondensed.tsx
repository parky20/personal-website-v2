'use client'
import AnimatedHamburger from "@/ui/AnimatedHamburger";
import { useEffect, useState } from "react";
import NavigationItem from "./Navigationitem";
import ToggleTheme from "./ToggleTheme";

const MobileNav = () => {
    const [open, setOpen] = useState(false);  
     const handleClick = () => {
      setOpen(!open) 
     }
     const handleResize = () => {
        setOpen(false) 
     }
  

     useEffect(() => { 
        const rootElement = document.getElementById("root");
        window.addEventListener('resize', handleResize)      
        if (open) {
            document.body.style.overflow = "hidden";  
            if(rootElement){
                rootElement.style.filter = "blur(2px)"
            }
        } else {
            document.body.style.overflow = "auto";
            if(rootElement){
                rootElement.style.filter = "none"
            }

        }
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.style.overflow = "auto";   
            if(rootElement){
                rootElement.style.filter = "none"
            }
        }
     }, [open])
     
      
    return( 
        <div className="tablet:hidden"> 
         {open && <div className="absolute top-0 right-0 overlay w-4/6 bg-white dark:bg-dark-background  flex justify-center items-center h-screen z-50"> 
                <div className="flex flex-col items-center space-y-10"> 
                    <ToggleTheme />
                    <NavigationItem menu="home" href="/"/>
                    <NavigationItem menu="about me" href="/about me"/>
                    <NavigationItem menu="resume" href="/resume"/> 
                </div>
            </div>}
        <button className="absolute top-8 right-3 z-[100] h-1/3 w-1/6" onClick={handleClick}> {(<AnimatedHamburger open={open}/>)}</button>  
        </div>)
}
export default MobileNav