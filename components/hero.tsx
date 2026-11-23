import Image from "next/image";
import { HeroCircles } from "@/components/hero-circles";
import { RoleCycle } from "@/components/role-cycle";
import { profile } from "@/lib/profile";

export function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-hero px-6 pb-8 pt-28 text-hero-fg md:px-10 md:pt-32"
    >
      <HeroCircles />

      <Image
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        priority
        className="pointer-events-none absolute right-6 top-[30%] z-10 size-32 rounded-full border-4 border-hero-fg object-cover md:right-16 md:size-52"
      />

      <div className="rise pointer-events-none relative z-10">
        <h1 className="font-display text-[clamp(4.25rem,16vw,13rem)] leading-[0.88]">
          <span className="block"><span className="underline decoration-[0.05em] underline-offset-[0.06em]">{first}</span></span>
          <span className="mt-1 flex flex-wrap items-end gap-x-5 md:ml-[3%]">
            <span className="underline decoration-[0.05em] underline-offset-[0.06em]">{last}</span>
            <span className="mb-[0.6em] font-sans text-xs font-semibold uppercase leading-snug tracking-wide md:text-sm">
              <RoleCycle roles={profile.roles} />
              <br />
              Currently based in {profile.location}
            </span>
          </span>
        </h1>
        <p className="mt-8 max-w-md text-base leading-relaxed md:text-lg">{profile.headline}</p>
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <nav aria-label="Hero" className="font-serif text-2xl italic md:text-3xl">
          <a href="#work" className="underline underline-offset-4">
            Work
          </a>
          <span aria-hidden="true">, </span>
          <a href="#experience" className="underline underline-offset-4">
            About
          </a>
        </nav>
        <a
          href="#work"
          aria-label="Scroll to selected work"
          className="grid size-12 place-items-center rounded-full border-2 border-hero-fg text-xl transition-transform hover:translate-y-1"
        >
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
