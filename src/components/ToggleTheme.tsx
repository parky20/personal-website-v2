'use client'
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
export default function ToggleTheme() {   
    const [mounted, setMounted] = useState(false)
    const {setTheme, resolvedTheme} = useTheme()   

    useEffect(() => { 
        setMounted(true)    
    }, [])
    if (!mounted) {
      return null
    }
    return (<div className="h-8 w-14 p-1 z-50 rounded-full bg-accent bg-opacity-15 transition-transform ease-in" onClick={() => {
                resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark') 
            }}>
        <motion.div className="rounded-full h-6 w-6 bg-accent bg-opacity-75 relative text-white" animate={resolvedTheme === 'dark' ? "dark" : "light"} variants={{dark: {transform: "translateX(20px)"}, light: {transform:"translateX(0)"}}}  >
            {resolvedTheme === 'dark' ? (<FiMoon className="absolute inset-0 m-auto hover:text-dark-text"/>) : (<FiSun className="absolute inset-0 m-auto hover:text-dark-text"/>)} 
        </motion.div>
    </div>)
}