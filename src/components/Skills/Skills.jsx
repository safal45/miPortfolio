import React from "react";

const LanguageComponent = ({ languages }) => {
  return (
    <div className="p-4 mx-2 bg-white bg-opacity-5 items-center justify-center flex flex-wrap w-full md:w-3/4">
      {languages.map((language, index) => (
        <div className="h-20 p-4   m-2" key={index}>
          <img
            className="h-8 w-8 transition-transform transform hover:scale-150"
            src={language.logo}
            alt={`${language.name} LOGO`}
          />
          {/* <p className="font-Anton text-white hover:text-purple-900">
            {language.name}
          </p> */}
        </div>
      ))}
    </div>
  );
};

export default LanguageComponent;
