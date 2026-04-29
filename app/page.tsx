import About from "@/components/landing/About";
import Breadth from "@/components/common/Breadth";
import Find from "@/components/common/Find";
import Flow from "@/components/landing/Flow";
import Hero from "@/components/landing/Hero";
import Insights from "@/components/landing/insights";
import Products from "@/components/landing/Products";
import Retreat from "@/components/landing/Retreat";
import WhyYoga from "@/components/landing/Whyoga";
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
