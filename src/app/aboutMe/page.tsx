'use client'
import HighlightedText from "@/ui/HighlightedText";
import { motion } from "framer-motion";
import Image from "next/image";
export default function AboutMe() {
    // const [show, setShow] = useState(false)
    // const [show2, setShow2] = useState(false)
    // const [show3, setShow3] = useState(false)
    // function handleClick() {
    //     if(show) {
    //         setShow(false)
    //     } else {
    //         setShow(true)
    //     } 
    // }  
    // function handleClick2() {
    //     if(show2) {
    //         setShow2(false)
    //     } else {
    //         setShow2(true)
    //     } 
    // }
    // function handleClick3() {
    //     if(show3) {
    //         setShow3(false)
    //     } else {
    //         setShow3(true)
    //     } 
    // }
    return ( 
        <div className="h-auto flex flex-col justify-start mt-40 mb-16 items-center">  
         <span className="text-lg font-semibold mb-10">About Me! <span className="text-primary">₊*✦</span></span> 
         {/* <motion.div animate={show ? "show" : "hide"} variants={{show: {display:"flex"}, hide: {display:"none"} }} className="absolute hidden top-0 right-28"> 
                <Image src="/arrow1.svg" width={180} height={180} alt="neu-grad" className="absolute top-16 -left-40"/>   
                <Image src="/grad.png" width={180} height={180} alt="neu-grad" className="rounded-md border-[#174727] border-2"/>   
        </motion.div>  */}
        <motion.div 
            whileInView="visible"
            initial="hidden"  
            transition={{ duration: 1}}
            variants={{
                visible: { transform: "translateY(0px)", opacity: 1 },
                hidden: { transform: "translateY(-100px)", opacity: 0 }
            }}
            className="overflow-y-hidden flex flex-col tablet:flex-row w-screen items-center tablet:px-32 laptop:px-52 desktop:px-72 justify-center px-10 ">    
            <Image className="mb-5" src="/profile.png" alt="profile" width={250} height={250}/>
            <p className="text-base md:text-[18px] font-sans font-light ml-10">   
                My name is Yuni Park, and I recently graduated from <HighlightedText 
                //onClick={handleClick} animate={show ? "show" : "hide"} variants={{show: {textDecoration: "underline", fontSize: 18}, hide: {textDecoration: "none", fontSize: 16}}} 
                >
                Khoury College of Computer Science at Northeastern University </HighlightedText> with a degree in <HighlightedText>Computer Science and Cognitive Psychology</HighlightedText>.
                Growing up, I always enjoyed art, solving problems, and helping others through creative ways. <br/> <br/> 
                At Northeastern, I had the opportunity to delve deeper into human behavior and the technical side of computing. 
                Combining my interdisciplinary skills, I aim to <HighlightedText 
                //onClick={handleClick3} animate={show3 ? "show" : "hide"} variants={{show: {textDecoration: "underline", fontSize: 18}, hide: {textDecoration: "none", fontSize: 16}}} className="text-[#174727] font-semibold cursor-pointer"
                >develop solutions</HighlightedText> that solve real-world problems, and bring enjoyment to people’s lives by providing an inclusive user experience. <br/><br/>
                In my free time, you’ll often find me spending time with friends and family, travelling, learning new baking recipes and exploring the city!</p>   
         </motion.div>     
        {/* <motion.div animate={show3 ? "show" : "hide"} variants={{show: {display:"flex-col",rotate:"5deg", transition: {repeat: 5, repeatType: "reverse"}}, hide: {display:"none", rotate:"none"} }} className="absolute hidden bottom-1/2 right-0">   
                <span className="text-gray-700"> Scroll to view my projects!</span>
                👇 
        </motion.div>  
        <motion.div animate={show2 ? "show" : "hide"} variants={{show: {display:"flex"}, hide: {display:"none"} }} className="absolute hidden bottom-20 left-1/2 flex-col -rotate-6">   
                <Image src="/arrow2.svg" width={180} height={180} alt="neu-grad" className="absolute -top-20 -left-44"/>   
                <span className="-translate-x-12">🥨🍪 Baking</span>
                <Image src="/bake.png" width={150} height={150} alt="bake" className="rounded-md -translate-x-12"/>    
        </motion.div>  
        <motion.div animate={show2 ? "show" : "hide"} variants={{show: {display:"flex",rotate:"5deg", transition: {repeat: 5, repeatType: "reverse"}}, hide: {display:"none", rotate:"none"} }} className="absolute hidden bottom-20 right-1/4">   
                <span className="absolute -left-5 -rotate-45">📍 Barcelona!</span>
                <Image src="/barcelona.png" width={80} height={80} alt="barcelona"/> 
        </motion.div>   */} 
        </div>
   )
} 