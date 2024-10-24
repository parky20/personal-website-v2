import { cn } from '@/lib/utils';
import React from 'react';

type SideBarProps = {
    children: React.ReactNode; // Define the prop 'children' to accept any valid React node
    left: boolean;
}; 
const SideBar: React.FC<SideBarProps> = ({ children, left}) => { 
    const barHeight = left ? 'h-36' : 'h-24';
    const barMargin = left ? 'mt-0' : 'mt-20'
    return ( 
        <div className={cn('fixed flex flex-col min-h-max w-1/12 bottom-0 items-center justify-center md:text-lg z-50 font-dmSerif', left ? 'left-0 space-y-6' : 'right-0' )}>
            {children} 
            <div className={cn('border-r border-accent border-[1px]', barHeight, barMargin)}/> 
        </div>
    );
};

export default SideBar; 