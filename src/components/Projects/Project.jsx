import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ProjectComponent = ({ projects }) => {
  console.log("Rendering ProjectComponent with data:", projects);
  return (
    <div className="w-full min-h-screen slide-container p-4">
      <Slide>
        {projects.map((project, index) => (
          <div
            className="w-full h-auto text-white flex justify-center items-center py-4"
            key={index}
          >
            <div className="w-full md:w-3/4 lg:w-1/2 shadow-lg shadow-purple-800 hover:shadow-white mx-5 p-6 md:p-10 rounded-xl flex flex-col items-center">
              <div className="w-full h-auto text-center md:text-left">
                <h1 className="text-purple-950 font-Anton text-3xl md:text-5xl lg:text-7xl pb-4">
                  {project.name}
                </h1>
                <h1 className="text-white font-Anton text-sm md:text-lg pb-2">
                  {project.value}
                </h1>
                {project.deploy && (
                  <h1 className="text-blue-800 font-Anton text-sm md:text-lg pb-2">
                    <span className="text-purple-950 font-Anton text-md md:text-xl">
                      Deployed On:
                    </span>
                    {project.deploy}
                  </h1>
                )}
                <h1 className="text-blue-800 font-Anton text-sm md:text-lg pb-2">
                  <span className="text-purple-950 font-Anton text-md md:text-xl">
                    Github Repo:
                  </span>
                  {project.repo}
                </h1>
                <h1 className="text-white font-Anton text-xs md:text-sm mt-2">
                  {project.about}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ProjectComponent;
