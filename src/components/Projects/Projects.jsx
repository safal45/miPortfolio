import React from "react";
import ProjectComponent from "./Project";

function Projects() {
  
  const projectData = [
    {
      name: "Tic Tack",
      value: "Created By HTML , CSS , JAVASCRIPT , FLASK , BOOTSTRAP ETC. ",
      about:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Optio quasi fugit nemo enim culpa, maxime asperioresreprehenderit aliquam obcaecati et voluptatum nisi placeat labore debitis libero. Debitis suscipit exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate placeat minus aut, consequuntur rem! Nisi adipiscimolestias minima illo optio, expedita, sunt at amet reprehenderit, qui officiis ducimus nesciunt.",
      deploy: "www.wap.tiotn.tusbx.djdffn.in",
      repo: "http://localhost:3000/projects",
    },
    {
      name: "Tic Tack",
      value: "Created By HTML , CSS , JAVASCRIPT , FLASK , BOOTSTRAP ETC. ",
      about:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Optio quasi fugit nemo enim culpa, maxime asperioresreprehenderit aliquam obcaecati et voluptatum nisi placeat labore debitis libero. Debitis suscipit exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate placeat minus aut, consequuntur rem! Nisi adipiscimolestias minima illo optio, expedita, sunt at amet reprehenderit, qui officiis ducimus nesciunt.",
      deploy: "www.wap.tiotn.tusbx.djdffn.in",
      repo: "http://localhost:3000/projects",
    },
    {
      name: "Tic Tack",
      value: "Created By HTML , CSS , JAVASCRIPT , FLASK , BOOTSTRAP ETC. ",
      about:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Optio quasi fugit nemo enim culpa, maxime asperioresreprehenderit aliquam obcaecati et voluptatum nisi placeat labore debitis libero. Debitis suscipit exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate placeat minus aut, consequuntur rem! Nisi adipiscimolestias minima illo optio, expedita, sunt at amet reprehenderit, qui officiis ducimus nesciunt.",
      deploy: "www.wap.tiotn.tusbx.djdffn.in",
      repo: "http://localhost:3000/projects",
    },
    {
      name: "Tic Tack",
      value: "Created By HTML , CSS , JAVASCRIPT , FLASK , BOOTSTRAP ETC. ",
      about:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Optio quasi fugit nemo enim culpa, maxime asperioresreprehenderit aliquam obcaecati et voluptatum nisi placeat labore debitis libero. Debitis suscipit exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate placeat minus aut, consequuntur rem! Nisi adipiscimolestias minima illo optio, expedita, sunt at amet reprehenderit, qui officiis ducimus nesciunt.",
      deploy: "www.wap.tiotn.tusbx.djdffn.in",
      repo: "http://localhost:3000/projects",
    },
    {
      name: "Tic Tack",
      value: "Created By HTML , CSS , JAVASCRIPT , FLASK , BOOTSTRAP ETC. ",
      about:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Optio quasi fugit nemo enim culpa, maxime asperioresreprehenderit aliquam obcaecati et voluptatum nisi placeat labore debitis libero. Debitis suscipit exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate placeat minus aut, consequuntur rem! Nisi adipiscimolestias minima illo optio, expedita, sunt at amet reprehenderit, qui officiis ducimus nesciunt.",
      deploy: "www.wap.tiotn.tusbx.djdffn.in",
      repo: "http://localhost:3000/projects",
    }
  ];

  return (
    <section id="project" className="text-white">
      <img
        className="h-10 w-16 transition-transform transform hover:scale-110"
        src="/car.png"
        alt="logo"
      />
      <hr className="h-px bg-white border-0 dark:bg-gray-700" />
      <ProjectComponent projects={projectData} />
    </section>
  );
}

export default Projects;
