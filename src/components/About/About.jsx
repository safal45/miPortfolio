import React from "react";
import LanguageComponent from "../Skills/Skills";

function About() {
  const languageData = [
    { name: "C", logo: "C.png" },
    { name: "C++", logo: "Cpp.png" },
    { name: "Python", logo: "Python.png" },
    { name: "JavaScript", logo: "JavaScript.png" },
    { name: "HTML5", logo: "HTML5.png" },
    { name: "CSS3", logo: "CSS3.png" },
    { name: "Git", logo: "Git.png" },
    { name: "GitHub", logo: "giii.png" },
    { name: "Tailwind CSS", logo: "Tailwind CSS.png" },
    { name: "Bootstrap", logo: "Bootstrap.png" },
    { name: "PyCharm", logo: "PyCharm.png" },
    { name: "VSCode", logo: "vsc.png" },
    { name: "React", logo: "logo192.png" },
    { name: "Flask", logo: "icons8-flask-600.png" },
    { name: "MySQL", logo: "MySQL.png" },
    { name: "SQLite", logo: "SQLite.png" },
  ];

  return (
    <section id="about" className="pt-16 pb-16 md:pb-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 flex flex-wrap text-white justify-center">
          <h1 className="font-Handy2 h-6 w-auto md:pl-80  pt-6 rotate-[13deg] text-2xl">
            My Skills
          </h1>
          <img
            src="/down2.png"
            className="h-12 ml-4 md:ml-80 mt-12 -ml-24 md:mt-16 animate-pulse w-16"
            alt="logo"
          />
          <LanguageComponent languages={languageData} />
        </div>
        <div className="hidden md:flex w-full md:w-1/3 p-8 md:p-16 text-white flex-col items-center">
          <span className="font-Handy2 flex">
            <h1>ME!!</h1>
            <img
              src="/down3.png"
              className="h-12 animate-pulse w-12"
              alt="logo"
            />
          </span>
          <img
            className="h-84 w-auto pr-12 rounded-full  hover:blur-0 mt-4"
            src="/mipic.jpg"
            alt="logo"
          />
        </div>
        <div className="hidden md:block w-full md:w-1/3 text-white p-4 md:p-0">
          <h1 className="pt-16 text-2xl font-Handy2 md:-ml-12">
            My qualifications
          </h1>
          <img
            src="/down3.png"
            alt="logo"
            className="h-12 animate-pulse w-12"
          />
          <div className="text-white font-Anton">
            <span>
              <h1 className="underline font-extrabold text-2xl">
                BACHELOR OF TECHNOLOGY MECH.E.
              </h1>
              <h1 className="text-md text-center md:mr-48">KNIT, SULTANPUR</h1>
              <h1 className="text-md text-center md:mr-48 -mt-1">
                2022-CURRENT
              </h1>
            </span>
            <span>
              <h1 className="underline pt-10 font-extrabold text-2xl">
                HIGHER SECONDARY CERTIFICATION
              </h1>
              <h1 className="text-md text-center md:mr-48">SGIC, AURAIYA</h1>
              <h1 className="text-md text-center md:mr-48 -mt-1">2020-2021</h1>
            </span>
            <span>
              <h1 className="pt-10 underline font-extrabold text-2xl">
                SECONDARY SCHOOL CERTIFICATION
              </h1>
              <h1 className="text-md text-center md:mr-48">SGIC, AURAIYA</h1>
              <h1 className="text-md text-center md:mr-48 -mt-1">2018-2019</h1>
            </span>
          </div>
          <span className="mt-10">
            <h1 className="font-Handy2 rotate-[13deg] text-xl pb-6 md:ml-48 text-center md:text-left">
              My hobby
            </h1>
            <img
              src="/down2.png"
              className="h-12 animate-pulse mx-auto md:ml-52 -mt-12 w-16"
              alt="logo"
            />
            <h1 className="font-Handy2 font-extrabold text-3xl pb-2 text-center md:text-left">
              Playing Volleyball
            </h1>
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
