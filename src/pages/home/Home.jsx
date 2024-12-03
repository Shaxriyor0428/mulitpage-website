import React from "react";
import Logotop from "./Logotop";
import Hero from "./Hero";
import About from "./About";
import Expertise from "./Expertise";
import Services from "./Services";
import Process from "./Process";
import Customers from "./Customers";
import Read from "./Read";
import Story from "../company/Story";
import Newstyler from "../company/Newstyler";

const Home = () => {
  return (
    <>
      <Hero />
      <Logotop />
      {/* <Story /> */}
      <About />
      <Expertise />
      <Services />
      <Process />
      <Customers />
      <Read />
      <Newstyler />
    </>
  );
};

export default Home;
