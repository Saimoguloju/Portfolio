import { profile } from "@/lib/profile";

export function SkillsMarquee() {
  return (
    <section
      aria-label="Skills and tools"
      className="marquee overflow-hidden border-y border-line py-6 md:py-8"
    >
      <ul className="marquee-track flex w-max items-center gap-x-12 text-2xl md:text-4xl">
        {[...profile.skills, ...profile.skills].map((skill, i) => (
          <li
            key={`${skill}-${i}`}
            aria-hidden={i >= profile.skills.length ? true : undefined}
            className="flex items-center gap-x-12 font-serif tracking-tight"
          >
            {skill}
            <span aria-hidden="true" className="text-accent">
              ✦
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
