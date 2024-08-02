"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navLinks } from "@/constants/data";
import { usePathname } from "next/navigation";

import About from "@/components/About";
import Works from "@/components/Works";
import Stack from "@/components/Stack";

export default function Home() {
  const path = usePathname();
  console.log(path);
  return (
    <main className="flex min-h-screen flex-col  justify-between padding">
      <FloatingNav navItems={navLinks} />
      <Hero />
      <About />
      <Works />
      <Stack />
  
    </main>
  );
}
