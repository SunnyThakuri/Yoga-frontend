import Overview from "@/src/components/individualclass/Overview";
import IndividualClass from "@/src/components/individualclass/IndividualClass";
import WhyYoga from "@/src/components/landing/Whyoga";
import React from "react";

const page = () => {
  return (
    <div>
      <IndividualClass />
      <Overview />
      <WhyYoga />
    </div>
  );
};

export default page;
