"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navLinks } from "@/constants/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import About from "@/components/About";

export default function Home() {
  const path = usePathname();
  console.log(path);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNav navItems={navLinks} />
      <Hero />
      <About />
  
    </main>
  );
}
