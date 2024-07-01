import React from "react";
import LanguageComponent from "../Skills/Skills";

function About() {
  const languageData = [
    { name: " ", logo: "C.png" },
    { name: " ", logo: "Cpp.png" },
    { name: " ", logo: "Python.png" },
    { name: " ", logo: "JavaScript.png" },
    { name: " ", logo: "HTML5.png" },
    { name: " ", logo: "CSS3.png" },
    { name: " ", logo: "Git.png" },
    { name: " ", logo: "giii.png" },
    { name: " ", logo: "Tailwind CSS.png" },
    { name: " ", logo: "Bootstrap.png" },
    { name: " ", logo: "PyCharm.png" },
    { name: " ", logo: "vsc.png" },
    { name: " ", logo: "logo192.png" },
    { name: " ", logo: "icons8-flask-600.png" },
    { name: " ", logo: "MySQL.png" },
    { name: " ", logo: "SQLite.png" },
  ];

  return (
    <section id="about" className="flex pt-16">
      <div className="w-1/3  flex flex-wrap   text-white ">
        <h1 className="font-Handy2 h-6 w-auto pl-80 pt-6 rotate-[13deg] text-2xl">
          My Skills
        </h1>
        <img
          src="/down2.png"
          className="h-12 ml-80  -mt-32 animate-pulse w-16"
          alt="logo"
        />
        <LanguageComponent languages={languageData} />
      </div>
      <div className="w-1/3 p-16 text-white">
        <span className="font-Handy2 flex">
          <h1>ME!!</h1>
          <img src="/down3.png" className="h-12 animate-pulse w-12" />
        </span>
        <img
          className="h-[420px] w-auto pr-12 rounded-full  blur-sm hover:blur-0 hover:"
          src="/mipic.jpg"
          alt="logo"
        />
      </div>
      <div className="w-1/3 text-white ">
        <h1 className=" pt-16  text-2xl font-Handy2 -ml-12">
          {" "}
          My qualifications
        </h1>
        <img src="/down3.png" alt="logo" className="h-12 animate-pulse w-12" />
        <div className="text-white font-Anton">
          <span>
            <h1 className="  underline font-extrabold text-2xl">
              BACHELOR OF TECHNOLOGY MECH.E.
            </h1>
            <h1 className="text-md text-center mr-48">KNIT, SULTANPUR</h1>
            <h1 className="text-md text-center mr-48 -mt-1">2022-CURRENT</h1>
          </span>
          <span>
            <h1 className="  underline  pt-10 font-extrabold text-2xl">
              HIGHER SECONDARY CERTIFICATION
            </h1>
            <h1 className="text-md text-center mr-48">SGIC, AURAIYA</h1>
            <h1 className="text-md text-center mr-48 -mt-1">2020-2021</h1>
          </span>
          <span>
            <h1 className=" pt-10 underline font-extrabold text-2xl">
              SECONDARY SCHOOL CERTIFICATION
            </h1>
            <h1 className="text-md text-center mr-48">SGIC, AURAIYA</h1>
            <h1 className="text-md text-center mr-48 -mt-1">2018-2019</h1>
          </span>
          <span>
            <h1 className="font-Handy2 rotate-[13deg] text-xl mt-20 pb-6 ml-52 text-white">
              My hobby
            </h1>
            <img
              src="/down2.png"
              className="h-12 animate-pulse ml-52 -mt-12 w-16"
              alt="logo"
            />
            <h1 className="font-Handy2 font-extrabold text-3xl pb-2 text-white">
              Playing Volleyball
            </h1>
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
