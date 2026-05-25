import About from "@/src/components/landing/About";
import Breadth from "@/src/components/common/Breadth";
import Find from "@/src/components/common/Find";
import Flow from "@/src/components/landing/Flow";
import Hero from "@/src/components/landing/Hero";
import Insights from "@/src/components/landing/insights";
import Products from "@/src/components/landing/Products";
import Retreat from "@/src/components/landing/Retreat";
import WhyYoga from "@/src/components/landing/Whyoga";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Flow />
      <Retreat />
      <Products />
      <WhyYoga />
      <Breadth />
      <Insights />
    </div>
  );
}
