import LanguageBox from "@/ui/LanguageBox";
import React from 'react';

type LanguagesProps = {
    languages: string[];  
};

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
    return (
        <div className="flex flex-wrap md:mt-3 mt-0 font-light">
            {languages.map((language, index) => (
                <LanguageBox key={index}>{language}</LanguageBox>
            ))}
        </div>
    );
};

export default Languages;
