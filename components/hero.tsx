import { HeroCircles } from "@/components/hero-circles";
import { RoleCycle } from "@/components/role-cycle";
import { profile } from "@/lib/profile";

export function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-hero px-6 pb-8 pt-12 text-hero-fg md:px-10 md:pt-14"
    >
      <HeroCircles />

      <div className="rise pointer-events-none relative z-10">
        <h1 className="font-display text-[clamp(4.25rem,16vw,13rem)] leading-[0.88]">
          <span className="block"><span className="underline decoration-[0.05em] underline-offset-[0.06em]">{first}</span></span>
          <span className="mt-1 flex flex-wrap items-end gap-x-5 md:ml-[3%]">
            <span className="underline decoration-[0.05em] underline-offset-[0.06em]">{last}</span>
            <span className="mb-[0.6em] flex flex-col items-start gap-1 font-sans text-xs font-semibold uppercase leading-snug tracking-wide md:text-sm">
              <span className="min-w-[26ch]">
                <RoleCycle roles={profile.roles} />
              </span>
              <span>Currently based in {profile.location}</span>
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
