'use client'
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "../components/DarkModeSwitch.css";
import NavigationItem from "./Navigationitem";

export default function NavMenux() {  
    const pathname = usePathname();
    const [current, setCurrent] = useState('');
    const activeMenu = (path: string) => {  
        return current === path
    }
    useEffect(() => {
        setCurrent(pathname); 
    }, [pathname]);
 
    return (
        <div className="hidden  
                    tablet:flex tablet:items-center p-1 
                    h-full relative 
                    dark:bg-dark-background text-sm">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <NavigationItem 
                    menu="home" 
                    href="/"  
                    active = {activeMenu("/")}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <NavigationItem 
                    menu="about me" 
                    href="/aboutMe" 
                    active = {activeMenu("/aboutMe")} 
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <NavigationItem 
                    menu="resume" 
                    href="/resume"  
                    active = {activeMenu("/resume")}
                />
            </motion.div>
        </div>   
    );
}
