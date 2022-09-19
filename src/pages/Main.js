import React from "react";
import Home from "./home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./contact/Contact";

const MainPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default MainPage;
