import React from "react";
import ProjectComponent from "./Project";

function Projects() {
  
  const projectData = [
    {
      name: "Career_web",
      value:
        "Created By HTML , CSS , JAVASCRIPT , FLASK , MYSQL , BOOTSTRAP ETC. ",
      about:
        "The website is a dynamic and interactive platform powered by Flask, HTML, CSS, JavaScript, and MySQL. It seamlessly integrates a robust backend infrastructure to deliver a seamless user experience. Leveraging the power of MySQL, it efficiently manages data storage and retrieval for enhanced functionality. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Optio quasi fugit nemo enim culpa, maxime asperioresreprehenderit aliquam obcaecati et voluptatum nisi placeat labore debitis libero. Debitis suscipit exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate placeat minus aut, consequuntur rem! Nisi adipiscimolestias minima illo optio, expedita, sunt at amet reprehenderit, qui officiis ducimus nesciunt.",
      deploy: "careerweb.safalpathak.tech",
      repo: "https://github.com/safal45/Loco",
    },
    {
      name: "my_Blog",
      value:
        "Created By HTML , CSS , JAVASCRIPT , FLASK ,SQLITE, BOOTSTRAP ETC. Lorem",
      about:
        "Our Blog web project! Built using Flask, html, css, Bootstrap, SQLAlchemy, and SQLite, it offers a seamless user experience. Users can create and manage their blogs, reset passwords securely, and edit their profiles easily.Our Blog web project! Built using Flask, html, css, Bootstrap, SQLAlchemy, and SQLite, it offers a seamless user experience. Users can create and manage their blogs, reset passwords securely, and edit their profiles easily Our Blog web project! Built using Flask, html, css, Bootstrap, SQLAlchemy, and SQLite, it offers a seamless user experience. Users can create and manage their blogs, reset passwords securely, and edit their profiles easily.Our Blog web project! Built using Flask, html, css, Bootstrap, SQLAlchemy, and SQLite, it offers a seamless user experience. Users can create and manage their blogs, reset passwords securely, and edit their profiles easily",
      deploy: "myblog.safalpathak.tech",
      repo: "https://github.com/safal45/my_Blog",
    },
    {
      name: "Currency_Converter",
      value: "Created By HTML , CSS , JAVASCRIPT , REACT, TAILWIND CSS ETC. ",
      about:
        " Currency_Converter is a dynamic web application crafted using a combination of HTML, CSS, JavaScript, React, and Tailwind CSS. This versatile tool allows users to effortlessly convert currencies, providing a seamless and interactive experience. The integration of React ensures a responsive and efficient user interface, while Tailwind CSS contributes to the modern and visually appealing design. With the power of these technologies, the Currency_Converter offers a robust solution for users to conveniently handle currency conversions on the web. ipsum dolor sit amet consectetur, adipisicing elit.Optio quasi fugit nemo enim culpa, maxime asperioresreprehenderit aliquam obcaecati et voluptatum nisi placeat labore debitis libero. Debitis suscipit exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate placeat minus aut, consequuntur rem! Nisi adipiscimolestias minima illo optio, expedita, sunt at amet reprehenderit, qui officiis ducimus nesciunt",
      deploy: "currencyconverter.safalpathak.tech",
      repo: "https://github.com/safal45/Currency_Converter",
    },
    {
      name: "Password_Generator",
      value: "Created By HTML , CSS , JAVASCRIPT , REACT, TAILWIND CSS ETC. ",
      about:
        " The PASSWORD_GENERATOR is a secure and user-friendly web application developed using HTML, CSS, JavaScript, React, and Tailwind CSS. This tool empowers users to generate strong and random passwords effortlessly, enhancing online security. The integration of React ensures a smooth and interactive experience, while Tailwind CSS contributes to the application's modern and visually appealing design. With a combination of these technologies, the PASSWORD_GENERATOR provides a reliable solution for creating robust passwords, prioritizing user privacy and data protection.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Optio quasi fugit nemo enim culpa, maxime asperioresreprehenderit aliquam obcaecati et voluptatum nisi placeat labore debitis libero. Debitis suscipit exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate placeat minus aut, consequuntur rem! Nisi adipiscimolestias minima illo optio, expedita, sunt at amet reprehenderit, qui officiis ducimus nesciunt.",
      deploy: "passwordcreater.safalpathak.tech",
      repo: "https://github.com/safal45/passGenerator",
    },
    {
      name: "To-do List",
      value: "Created By HTML , CSS , JAVASCRIPT , REACT, TAILWIND CSS ETC. ",
      about:
        " The TODO_LIST is a versatile task management web application meticulously crafted with HTML, CSS, JavaScript, React, and Tailwind CSS. This dynamic tool allows users to organize and track their tasks efficiently. The incorporation of React ensures a responsive and interactive user interface, while Tailwind CSS contributes to a sleek and modern design. With the synergy of these technologies, the TODO_LIST provides a seamless and visually appealing solution for users to manage their daily tasks with ease.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Optio quasi fugit nemo enim culpa, maxime asperioresreprehenderit aliquam obcaecati et voluptatum nisi placeat labore debitis libero. Debitis suscipit exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate placeat minus aut, consequuntur rem! Nisi adipiscimolestias minima illo optio, expedita, sunt at amet reprehenderit, qui officiis ducimus nesciunt.",
      deploy: "todolist.safalpathak.tech",
      repo: "https://github.com/safal45/Todo_app",
    },
  ];

  return (
    <section id="project" className="pt-20 text-white">
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
