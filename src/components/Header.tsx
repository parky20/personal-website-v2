'use client'
import MobileNav from "./NavCondensed";
import NavMenu from "./NavMenu";
import ToggleTheme from "./ToggleTheme";

const Header = () => {  
   return( 
   <header className="z-50 fixed top-0 flex items-center tablet:left-0 tablet:px-10 tablet:py-8
                        justify-center w-screen h-20 font-semibold bg-background bg-opacity-60 dark:bg-dark-background">   
        <NavMenu />
        <div className="hidden tablet:flex absolute right-14">
        <ToggleTheme />
        </div> 
        <MobileNav/>
    </header>)
} 

export default Header