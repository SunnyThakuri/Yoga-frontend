import About from "@/components/landing/About";
import Hero from "@/components/landing/Hero";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}
