import Overview from "@/components/individualclass/Overview";
import IndividualClass from "@/components/individualclass/IndividualClass";
import WhyYoga from "@/components/landing/Whyoga";
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
