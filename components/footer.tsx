import Image from "next/image";
import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#c6613f] px-6 pb-16 pt-16 text-[#fffbf3] md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[#fff1e6]">Contact</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight md:text-6xl">
          Building the next production system.
        </h2>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <li>
            <a className="underline decoration-[#fffbf3] underline-offset-4" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>
          <li>
            <a className="underline decoration-[#fffbf3] underline-offset-4" href={profile.phoneHref}>
              {profile.phone}
            </a>
          </li>
          {profile.links.map((link) => (
            <li key={link.href}>
              <a
                className="inline-flex items-center gap-2 underline decoration-[#fffbf3] underline-offset-4"
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
        <p className="mt-16 text-sm text-[#fff1e6]">
          {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
