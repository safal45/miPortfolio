import React from "react";

const ProgressComponent = ({ progresses }) => {
  return (
    <>
      <h1 className="font-Handy text-fuchsia-50 hover:text-fuchsia-500 flex items-center justify-center text-5xl md:text-8xl pt-12 md:pt-24 px-4 text-center">
        MY SKILLS
      </h1>
      <hr className="w-48 md:w-72 h-2 mx-auto border-2 border-white rounded mt-6 mb-0" />
      <div className="w-full max-w-5xl mx-auto px-6 mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
        {progresses.map((progress, index) => (
          <div className="pt-5 text-white" key={index}>
            <p className="font-Anton text-sm md:text-base text-purple-200 hover:text-purple-400 mb-1">
              {progress.name}
            </p>
            <div className="mb-2">
              <div
                className="flex w-full h-2 bg-gray-700 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={progress.value}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="rounded-full overflow-hidden bg-orange-800 transition-all duration-700"
                  style={{ width: `${progress.value}%` }}
                ></div>
              </div>
            </div>
            <p className="text-right text-xs text-gray-500 font-mono">{progress.value}%</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProgressComponent;
