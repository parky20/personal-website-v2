'use client'

import { Colors } from "@/lib/utils"
import { motion } from "framer-motion"
import "../components/DarkModeSwitch.css"
type LinkedIconProps = {
    children: React.ReactNode,
    href: string, 
}
const LinkedIcon: React.FC<LinkedIconProps> = ({children, href}) => {  
    return ( 
        <motion.div whileHover={{color: Colors.accent, scale: 1.5}} className="flex relative text-primary dark:text-dark-text">
             <a href={href} className="text-base inset-0 ml-0.5">{children}</a>   
        </motion.div>
     )
}

export default LinkedIcon