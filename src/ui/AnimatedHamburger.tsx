import { motion, MotionConfig } from "framer-motion";

type ClickProps = {
    open: boolean; 
}; 


const AnimatedHamburger = ({open}: ClickProps) => {
    return( 
    <MotionConfig
        transition={{
            duration: 0.5, 
            ease: "backOut"
        }}
    >
        <motion.div initial={false} animate={open ? "open": "closed"} className="flex flex-col items-end">
            <motion.span  
                variants={{
                    open: {rotate: ["0deg", "0deg", "45deg"], 
                            top: [0, 7.5, 7.5]},
                    closed: {rotate: ["45deg", "45deg", "0deg"], 
                        top: [7.5, 7.5, 0]}}}
                className="absolute h-[2px] w-8 bg-black dark:bg-dark-text"
                style={{
                    top: 0
                }}/>
            <motion.span  
                 variants={{
                     open: {rotate: ["0deg", "0deg", "-45deg"]},
                     closed: {rotate: ["-45deg", "-45deg", "0deg"]}}}
                className="absolute h-[2px] w-8 bg-black dark:bg-dark-text"
                style={{
                    top: 7.5
                }}/>
            <motion.span  
                 variants={{
                     open: {rotate: ["0deg", "0deg", "45deg"],
                        opacity: [1,0,0],
                        top: [15, 7.5, 7.5]
                     },
                     closed: {rotate: ["45deg", "0deg", "0deg"],
                        opacity: [0, 0, 1],
                        top: [7.5, 7.5, 15]
                     }}}
                className="absolute h-[2px] w-5 bg-black dark:bg-dark-text"
                style={{
                    top: 15
                }}/>
        </motion.div>
    </MotionConfig>)
}

export default AnimatedHamburger;