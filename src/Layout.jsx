import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <Footer/>
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
