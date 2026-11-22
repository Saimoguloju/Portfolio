import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Principles } from "@/components/principles";
import { SkillsMarquee } from "@/components/skills-marquee";
import { Systems } from "@/components/systems";
import { Work } from "@/components/work";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SkillsMarquee />
        <Work />
        <Systems />
        <Principles />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
