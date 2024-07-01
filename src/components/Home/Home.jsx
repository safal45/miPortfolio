import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="bg-white dark:bg-black flex pt-16 flex-wrap justify-between w-screen"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/5263/5263662.png"
          className="bg-white dark:bg-black w-12 h-20 ml-6 hidden md:block md:ml-24"
          alt="bulb"
        />

        <div className="flex flex-col md:flex-row items-center w-full">
          <img
            src="/Mypic.jpeg"
            className="bg-white dark:bg-black w-1/3 mx-auto md:ml-44 md:-mt-20 hidden md:block"
            alt="my Pic"
          />

          <div className="w-full md:w-2/3 text-center md:text-end">
            <div className="h-1/3 w-full font-mono pr-0 md:pr-32 font-extrabold pt-[110px] text-black dark:text-white text-3xl md:text-5xl">
              <Typewriter
                options={{
                  strings: ["Hello There!!!", "नमस्ते!!!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="h-2/3 w-auto mt-4 md:mt-0">
              <h1 className="font-Anton text-4xl md:text-8xl md:pr-32 text-purple-800">
                <span className="text-black dark:text-white text-4xl md:text-8xl font-Anton">
                  I AM
                </span>{" "}
                SAFAL PATHAK
              </h1>

              <h1 className="text-black dark:text-white font-serif text-sm md:pr-20 mt-4 md:mt-0">
                Hello! I'm passionate about exploring the vast landscape of
                technology. My expertise spans various programming languages and
                tools, including C++, Python, JavaScript, HTML5, CSS3, and more.
                With a solid foundation in Git, I'm adept at version control,
                ensuring smooth collaboration on projects. I have hands-on
                experience with popular frameworks like Tailwind CSS and
                Bootstrap, bringing creativity and responsiveness to my web
                development projects. My proficiency extends to database
                management, with knowledge in MySQL and SQLite. As a developer,
                I thrive in the world of IDEs, from PyCharm to Visual Studio
                Code, ensuring an efficient and enjoyable coding experience.
                Whether it's crafting backend logic with Flask or creating
                visually appealing frontends, 🚀
              </h1>

              <div className="flex items-end justify-end mt-4 md:pr-32 md:mt-0">
                <a
                  href="https://drive.google.com/file/d/1-CsqiwmNawycnw83Nn7S1LXxVT2DuC3L/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-black h-[30px] w-[110px] mr-5 hover:shadow-md hover:shadow-fuchsia-50 shadow-md shadow-purple-500 border border-purple-800 text-white font-bold py-2 px-4 rounded-2xl inline-flex items-center">
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Resume</span>
                  </button>
                </a>

                <a
                  href="https://www.instagram.com/safal.pathak29/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-[25px] w-[25px] bg-black shadow-lg mx-2 text-purple-800"
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                  >
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/safal-pathak-22069a25b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-[25px] w-[25px]  bg-black mx-2 text-purple-800"
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                  >
                    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 13.894531 20.509766 C 11.127812 20.509766 10 22.539702 10 25.117188 L 10 37.011719 C 10 37.564391 10.447329 38.011719 11 38.011719 L 16 38.011719 C 16.552671 38.011719 17 37.564391 17 37.011719 L 17 25.117188 C 17 22.539702 15.872188 20.509766 13.105469 20.509766 L 13.894531 20.509766 z M 22 20.509766 C 20.355473 20.509766 19 21.79078 19 23.199219 L 19 25.300781 C 19 25.853453 19.447329 26.300781 20 26.300781 C 20.552671 26.300781 21 25.853453 21 25.300781 L 21 23.199219 C 21 22.914658 21.276133 22.509766 22 22.509766 C 22.723867 22.509766 23 22.914658 23 23.199219 L 23 36.300781 C 23 36.853453 23.447329 37.300781 24 37.300781 C 24.552671 37.300781 25 36.853453 25 36.300781 L 25 31.798828 C 25 30.845714 25.7245 30.15625 26.525391 30.15625 C 27.326282 30.15625 28 30.845714 28 31.798828 L 28 36.300781 C 28 36.853453 28.447329 37.300781 29 37.300781 C 29.552671 37.300781 30 36.853453 30 36.300781 L 30 31.798828 C 30 30.845714 30.7245 30.15625 31.525391 30.15625 C 32.326282 30.15625 33 30.845714 33 31.798828 L 33 36.300781 C 33 36.853453 33.447329 37.300781 34 37.300781 C 34.552671 37.300781 35 36.853453 35 36.300781 L 35 27.935547 C 35 24.522095 32.120358 22.509766 29.554688 22.509766 C 27.899473 22.509766 26.526486 23.324673 25.78125 24.513672 C 25.035973 23.324673 23.644527 22.509766 22 22.509766 C 21.911802 22.509766 21.823447 22.511239 21.736328 22.513672 C 21.736328 22.512251 21.736328 22.510799 21.736328 22.509766 L 22 20.509766 z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/safal45"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-[25px] w-[25px] shadow-lg bg-black mx-2 text-purple-800"
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="50px"
                    height="50px"
                  >
                    <path d="M10.9,2C6.3,2,2.6,5.7,2.6,10.3c0,3.7,2.4,6.8,5.7,7.9c0.4,0.1,0.5-0.2,0.5-0.4c0-0.2,0-0.8,0-1.6 c-2.3,0.5-2.8-1-2.8-1C5.4,14.3,5,13.9,5,13.9c-0.8-0.5,0.1-0.5,0.1-0.5c0.9,0.1,1.4,0.9,1.4,0.9c0.8,1.4,2,1,2.5,0.8 c0.1-0.6,0.3-1,0.6-1.2c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.2C6.6,7.7,6.4,6.7,6.9,5.4c0,0,0.7-0.2,2.3,0.8 c0.7-0.2,1.5-0.3,2.3-0.3c0.8,0,1.6,0.1,2.3,0.3c1.6-1,2.3-0.8,2.3-0.8c0.5,1.3,0.3,2.3,0.2,2.5c0.5,0.6,0.8,1.3,0.8,2.2 c0,3.1-1.9,3.8-3.6,4c0.3,0.3,0.6,0.9,0.6,1.8c0,1.3,0,2.3,0,2.6c0,0.2,0.2,0.5,0.6,0.4c3.3-1.1,5.7-4.2,5.7-7.9 C19.2,5.7,15.5,2,10.9,2z" />
                  </svg>
                </a>

                <a
                  href="mailto:ptksafalpathak@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-[25px] w-[25px] shadow-lg bg-black mx-2 text-purple-800"
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="50px"
                    height="50px"
                  >
                    <path d="M19.95,4H4.05C3.25,4,2.6,4.65,2.6,5.45v13.1C2.6,19.35,3.25,20,4.05,20h15.9c0.8,0,1.45-0.65,1.45-1.45V5.45 C21.4,4.65,20.75,4,19.95,4z M18.8,8.4l-6.09,3.8c-0.21,0.13-0.45,0.2-0.71,0.2s-0.5-0.07-0.71-0.2L5.2,8.4C5.07,8.32,5,8.18,5,8.03 c0-0.25,0.2-0.45,0.45-0.45h13.1c0.25,0,0.45,0.2,0.45,0.45C19,8.18,18.93,8.32,18.8,8.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
