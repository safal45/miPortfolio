import React from 'react'
import "../../App.css"



export default function Header() {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  };


    return (
      <header className="shadow fixed w-full font-Anton z-50 top-0 ">
        <nav className="bg-black">
          <div className="w-full h-full p-6 flex flex-wrap justify-between items-center shadow-lg shadow-purple-800 ">
            <h1 className=" font-Anton text-3xl   text-purple-800 flex items-center">
              WELCOME!
            </h1>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-2"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-8 ">
                <li>
                  <h1
                    className="text-xl  font-Anton text-white lg:hover:text-purple-800 mx-10"
                    onClick={() => {
                      scrollToSection("home");
                    }}
                  >
                    HOME
                  </h1>
                </li>
                <li>
                  <h1 className="text-xl  font-Anton text-white lg:hover:text-purple-800 mx-10">
                    ABOUT
                  </h1>
                </li>
                <li>
                  <h1 className="text-xl  font-Anton text-white lg:hover:text-purple-800 mx-10">
                    SKILLS
                  </h1>
                </li>
                <li>
                  <h1
                    className="text-xl  font-Anton text-white lg:hover:text-purple-800 mx-10"
                    onClick={() => {
                      scrollToSection("project");
                    }}
                  >
                    PROJECTS
                  </h1>
                </li>
                <li>
                  <h1 className="text-xl font-Anton  text-white lg:hover:text-purple-800 mx-10">
                    CONTACT ME
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}