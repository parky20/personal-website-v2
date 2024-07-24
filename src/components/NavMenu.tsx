'use client'
import { motion } from "framer-motion";
import "../components/DarkModeSwitch.css";
import NavigationItem from "./Navigationitem";

export default function NavMenux() {   
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
                />
            </motion.div>
        </div>   
    );
}
