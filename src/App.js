import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill2 from "./components/Skills/Skill2";
import Projects from "./components/Projects/Projects";
import Contactus from "./components/contact/Contactus";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
        <About />
        <Skill2 />
        <Projects />
        <Contactus />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
