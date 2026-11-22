import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Principles } from "@/components/principles";
import { Systems } from "@/components/systems";
import { Work } from "@/components/work";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Systems />
        <Principles />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
