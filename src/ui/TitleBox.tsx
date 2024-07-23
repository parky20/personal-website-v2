import React from 'react';

type TitleBoxProps = {
    children: React.ReactNode; // Define the prop 'children' to accept any valid React node 
};

const TitleBox: React.FC<TitleBoxProps> = ({ children}) => { 
    return ( 
        <div className='flex items-start w-full px-10 mb-10
                    tablet:w-auto tablet:pl-0 laptop:mb text-primary'>
            <span className='text-lg font-semibold'>{children}</span> 
        </div> 
    );
};

export default TitleBox; 