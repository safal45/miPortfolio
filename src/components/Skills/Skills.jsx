import React from 'react'

const LanguageComponent = ({ languages }) => {
    return (
      <div className="h-[70px] p-12 mx-8 items-center justify-center flex flex-wrap w-3/4 -mt-80">
        {languages.map((language, index) => (
          <div className="h-[70px] p-4 bg-white bg-opacity-5 " key={index}>
            <img
              className="h-8 w-8 transition-transform transform hover:scale-150 "
              src={language.logo}
              alt={`${language.name} LOGO`}
            />
            <p className=" font-Anton hover:text-purple-900">{language.name}</p>
          </div>
        ))}
      </div>
    );
};
 

export default LanguageComponent;