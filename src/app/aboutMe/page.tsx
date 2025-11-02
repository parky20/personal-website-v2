import HighlightedText from "@/ui/HighlightedText";
import Image from "next/image";
export default function AboutMe() { 
    return ( 
        <div className="h-auto flex flex-col justify-start mt-40 mb-16 items-center">  
         <span className="text-lg font-semibold mb-10">About Me! <span className="text-accent">₊*✦</span></span>
        <div
            className="overflow-y-hidden flex flex-col tablet:flex-row w-screen items-center tablet:px-32 laptop:px-52 desktop:px-72 justify-center px-10 ">    
            <p className="text-base md:text-[18px] font-sans font-light ml-10">   
                My name is Yuni Park, and I recently graduated from <HighlightedText>
                Khoury College of Computer Science at Northeastern University </HighlightedText> with a degree in <HighlightedText>Computer Science and Cognitive Psychology</HighlightedText>.
                Growing up, I always enjoyed solving problems, and helping others through creative ways. <br/> <br/> 
                At Northeastern, I had the opportunity to delve deeper into human behavior and the technical side of computing. 
                Combining my interdisciplinary skills, I aim to <HighlightedText>develop solutions</HighlightedText> that solve real-world problems, and bring enjoyment to people’s lives by providing an inclusive user experience. <br/><br/>
            </p>   
         </div> 
        </div>
   )
} 