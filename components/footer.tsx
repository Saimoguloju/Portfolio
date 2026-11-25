import Image from "next/image";
import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer id="contact" className="bg-footer px-6 pb-16 pt-16 text-on-accent md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.22em] text-on-accent/90">Contact</p>
        <h2 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.95] md:text-7xl">
          Building the next production system.
        </h2>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <li>
            <a className="underline decoration-on-accent underline-offset-4" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>
          {profile.links.map((link) => (
            <li key={link.href}>
              <a
                className="inline-flex items-center gap-2 underline decoration-on-accent underline-offset-4"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon ? (
                  <Image src={link.icon} alt="" width={20} height={20} className="size-5 rounded-sm" />
                ) : null}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-sm text-on-accent/90">
          {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
