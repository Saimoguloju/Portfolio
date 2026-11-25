import Image from "next/image";
import { profile } from "@/lib/profile";

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-7xl">About</h2>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={400}
              height={400}
              className="size-56 rounded-full object-cover md:size-72"
            />
          </div>
          <div className="md:col-span-7">
            <p className="max-w-2xl font-serif text-2xl leading-snug tracking-tight md:text-4xl">
              {profile.summary}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {profile.aboutMore}
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {profile.roles.map((role) => (
                <li key={role} className="text-accent">
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
