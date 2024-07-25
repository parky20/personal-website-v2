'use client'

import { Colors } from "@/lib/utils"
import { motion } from "framer-motion"
import "../components/DarkModeSwitch.css"
type LinkedIconProps = {
    children: React.ReactNode,
    href: string,
    border: boolean
}
const LinkedIcon: React.FC<LinkedIconProps> = ({children, href, border}) => { 
    const circle = border ? 'border-primary border-2 rounded-full p-2 border-opacity-40 shadow-header dark-mode-icons flex relative' : 
    'flex relative'
    return ( 
        <motion.div whileHover={{color: Colors.primary, scale: 1.5}} className={`${circle} text-accent`}>
             <a href={href} className="text-base inset-0 ml-0.5">{children}</a>   
        </motion.div>
     )
}

export default LinkedIcon