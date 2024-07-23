'use client'
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "../components/DarkModeSwitch.css";
export default function ToggleTheme() {   
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()   

    useEffect(() => { 
        setMounted(true)
        if(localStorage.getItem('theme') === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }, [])
    if (!mounted) {
        return null
      }
    return (<div className={`h-8 w-14 p-1 z-50 rounded-full bg-primary bg-opacity-15 transition-transform ease-in
               `} onClick={() => {
                    theme === 'dark' ? setTheme('light') : setTheme('dark') 
            }}>
        <motion.div className={`rounded-full h-6 w-6 bg-primary bg-opacity-75 relative text-white`} animate={theme === 'dark' ? "dark" : "light"} variants={{dark: {transform: "translateX(20px)"}, light: {transform:"translateX(0)"}}}  >
            {theme === 'dark' ? (<FiMoon className="absolute inset-0 m-auto"/>) : (<FiSun className="absolute inset-0 m-auto"/>)} 
        </motion.div>
    </div>)
}