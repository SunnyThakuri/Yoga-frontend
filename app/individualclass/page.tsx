import Overview from "@/components/individualclass/Overview";
import VinyasaFlow from "@/components/individualclass/VinyasaFlow";
import WhyYoga from "@/components/landing/Whyoga";
import React from "react";

const page = () => {
  return (
    <div>
      <VinyasaFlow />
      <Overview />
      <WhyYoga />
    </div>
  );
};

export default page;
