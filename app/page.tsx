import { About } from "@/components/about";
import { Beyond } from "@/components/beyond";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Principles } from "@/components/principles";
import { SkillsMarquee } from "@/components/skills-marquee";
import { Nav } from "@/components/nav";
import { Systems } from "@/components/systems";
import { Toolkit } from "@/components/toolkit";
import { Work } from "@/components/work";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <Work />
        <Systems />
        <Principles />
        <Toolkit />
        <Experience />
        <Beyond />
      </main>
      <Footer />
    </>
  );
}
