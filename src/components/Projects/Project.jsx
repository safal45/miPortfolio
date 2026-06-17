import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ProjectComponent = ({ projects, onSlideChange }) => {
  return (
    <div className="w-full overflow-hidden">
      <Slide
        autoplay={false}
        indicators={true}
        slidesToShow={1}
        slidesToScroll={1}
        onChange={(_oldIndex, newIndex) => onSlideChange && onSlideChange(newIndex)}
      >
        {projects.map((project, index) => (
          <div
            className="w-full flex justify-center items-start py-4 px-2"
            key={index}
          >
            <div className="w-full max-w-2xl shadow-lg shadow-purple-800 hover:shadow-white p-5 md:p-10 rounded-xl">
              <h1 className="text-purple-400 font-Anton text-2xl md:text-4xl lg:text-5xl pb-2 break-words">
                {project.name}
              </h1>
              <p className="text-purple-300 font-mono text-xs pb-4 tracking-wide leading-relaxed">
                {project.value}
              </p>
              <p className="text-gray-300 font-serif text-xs md:text-sm leading-relaxed">
                {project.about}
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-800 text-white font-Anton text-sm rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-purple-600 text-white font-Anton text-sm rounded-lg hover:bg-purple-800 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ProjectComponent;
