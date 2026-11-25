import Image from "next/image";
import { profile } from "@/lib/profile";

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-10">
        <h2 className="font-display text-5xl uppercase leading-[0.95] md:col-span-5 md:text-7xl">About</h2>
        <div className="md:col-span-7">
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={160}
            height={160}
            className="size-32 rounded-full object-cover md:size-40"
          />
          <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug tracking-tight md:text-4xl">
            {profile.summary}
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
    </section>
  );
}
