'use client'
import Logo from "@/ui/Logo";
import MobileNav from "./NavCondensed";
import NavMenu from "./NavMenu";
import ToggleTheme from "./ToggleTheme";

const Header = () => {  
   return( 
   <header className="z-50 fixed top-0 flex items-center tablet:left-0 tablet:px-10 tablet:py-8
                        justify-between w-screen h-20 font-semibold bg-white bg-opacity-60 dark:bg-dark-background"> 
        <Logo />  
        <NavMenu />
        <div className="hidden tablet:flex">
        <ToggleTheme />
        </div> 
        <MobileNav/>
    </header>)
} 

export default Header