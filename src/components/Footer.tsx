'use client'

import { motion } from "framer-motion";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
    return(<motion.div 
            whileInView="visible"
            initial="hidden"
            transition={{ duration: 1.5, type: "spring" }}
            variants={{
                visible: { transform: "translateY(0px)" },
                hidden: { transform: "translateY(-50px)" },
            }}
        className="flex justify-between items-center font-sans pb-20 w-screen text-primary laptop:px-28 text-xs tablet:text-sm laptop:text-base px-14"> 
        <span>ⓒ 2024 Yuni Park ✦ - a website made with love </span>  
        <a href="mailto:park.yun@northeastern.edu" className="p-2 inline-flex items-center whitespace-pre-wrap">Say Hello! <TfiEmail/></a> 
    </motion.div>)  
}