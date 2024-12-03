import React from "react";
import Hero from "./Hero";
import Process from "./Process";
import SectionsStyle from "./SectionsStyle";

import Newstyler from "../company/Newstyler";

const Service = () => {
  return (
    <>
      <Hero />
      <Process />
      <SectionsStyle/>
      <div className="container">
        <Newstyler />
      </div>
      {/* <Newstyler/> */}
    </>
  );
};

export default Service;
