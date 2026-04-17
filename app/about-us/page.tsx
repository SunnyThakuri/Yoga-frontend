import React from "react";
import AboutPage from "@/components/about/About";
import Shape from "@/components/about/Shape";
import Building from "@/components/about/Building";
import Breadth from "@/components/about/Breadth";

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
