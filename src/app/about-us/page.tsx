import React from "react";
import AboutPage from "@/src/components/about/About";
import Shape from "@/src/components/about/Shape";
import Building from "@/src/components/about/Building";
import Breadth from "@/src/components/about/Breadth";

const About = () => {
  return (
    <div>
      <AboutPage />
      <Shape />
      <Building />
      <Breadth />
    </div>
  );
};

export default About;
