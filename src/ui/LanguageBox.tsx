import React from 'react';

type LanguageBoxProps = {
    children: React.ReactNode; // Define the prop 'children' to accept any valid React node
};

const LanguageBox: React.FC<LanguageBoxProps> = ({ children }) => {
    return ( 
        <span className='px-2 py-1 border-primary border-[1px] text-xs text-primary font-mono rounded-md mt-2 mr-2'>{children}</span> 
    );
};

export default LanguageBox; 