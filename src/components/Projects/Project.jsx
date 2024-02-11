import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";





const ProjectComponent = ({ projects }) => {
  console.log("Rendering ProgressComponent with data:", projects);
  return (
    <div className="w-full h-screen slide-container">
      <Slide>
        {projects.map((project, index) => (
          <div
            className=" h-[500px] text-white flex justify-center items-center "
            key={index}
          >
            <div className="w-1/2 shadow-lg shadow-purple-800 hover:shadow-white bg-blue-400 p-16 rounded-xl flex justify-center items-center">
              <div className=" w-full h-auto ">
                <h1 className="text-red-950  font-Anton text-7xl pb-4">
                  {" "}
                  {project.name}
                </h1>
                <h1 className="text-red-950  font-Anton text-xl">
                  {" "}
                  {project.value}
                </h1>
                <h1 className="text-red-950  font-Anton text-lg">
                  {" "}
                  <span className="text-purple-950  font-Anton text-xl">
                    Depolyed On :{" "}
                  </span>{" "}
                  {project.deploy}
                </h1>
                <h1 className="text-red-950  font-Anton text-lg">
                  {" "}
                  <span className="text-purple-950  font-Anton text-xl">
                    Github Repo :{" "}
                  </span>
                  {project.repo}
                </h1>
                <h1 className="text-red-950  font-Anton text-sm">
                  {" "}
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
