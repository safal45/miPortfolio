import React, { useState } from "react";
import "../../App.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <header className="shadow fixed w-full font-Anton z-50 top-0">
      <nav className="bg-white dark:bg-black">
        <div className="w-full h-full p-6 flex flex-wrap justify-between items-center shadow-lg shadow-purple-800">
          <h1 className="font-Anton text-3xl text-purple-800 flex items-center">
            WELCOME!!
          </h1>
          <button className="lg:hidden text-purple-800" onClick={toggleMenu}>
            <img src="/menu.png" className="h-10 w-8" alt="Menu" />
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-2`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8">
              <li>
                <h1
                  className={`text-xl font-Anton mx-10 ${
                    isMenuOpen
                      ? "text-black dark:text-white dark:font-serif mt-4 mb-1 ml-1 lg:hover:text-purple-800 "
                      : "text-white my-2 -ml-1  dark:text-white lg:hover:text-purple-800"
                  }`}
                  onClick={() => {
                    scrollToSection("home");
                  }}
                >
                  HOME
                </h1>
              </li>
              <li>
                <h1
                  onClick={() => {
                    scrollToSection("about");
                  }}
                  className={`text-xl font-Anton mx-10 ${
                    isMenuOpen
                      ? "text-black dark:text-white dark:font-serif mb-1 ml-1 lg:hover:text-purple-800 "
                      : "text-white my-2 -ml-1  dark:text-white lg:hover:text-purple-800"
                  }`}
                >
                  ABOUT
                </h1>
              </li>
              <li>
                <h1
                  className={`text-xl font-Anton  mx-10 ${
                    isMenuOpen
                      ? "text-black dark:text-white dark:font-serif lg:hover:text-purple-800  mb-1 ml-1"
                      : "text-white my-2 -ml-1  dark:text-white lg:hover:text-purple-800"
                  }`}
                  onClick={() => {
                    scrollToSection("project");
                  }}
                >
                  PROJECTS
                </h1>
              </li>
              <li>
                <h1
                  onClick={() => {
                    scrollToSection("contactus");
                  }}
                  className={`text-xl font-Anton  mx-10 ${
                    isMenuOpen
                      ? "text-black dark:text-white dark:font-serif lg:hover:text-purple-800  mb-1 ml-1"
                      : "text-white my-2 -ml-1  dark:text-white lg:hover:text-purple-800"
                  }`}
                >
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
