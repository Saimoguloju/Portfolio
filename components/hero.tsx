import Image from "next/image";
import { profile } from "@/lib/profile";

export function Hero() {
  return (
    <section id="top" className="hero-glow px-6 pb-24 pt-32 md:px-10 md:pb-36 md:pt-44">
      <div className="rise mx-auto grid max-w-6xl items-end gap-12 md:grid-cols-[minmax(0,1fr)_16rem]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-6 max-w-5xl font-serif text-[3.25rem] leading-[0.95] tracking-tight md:text-8xl">
            {profile.headline}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {profile.summary}
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <li>
              <a className="underline decoration-accent underline-offset-4 hover:decoration-foreground" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <a className="underline decoration-accent underline-offset-4 hover:decoration-foreground" href={profile.phoneHref}>
                {profile.phone}
              </a>
            </li>
            {profile.links.map((link) => (
            <li key={link.href}>
              <a
                className="inline-flex items-center gap-2 underline decoration-accent underline-offset-4 hover:decoration-foreground"
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
        </div>
        <Image
          src={profile.photo}
          alt="Portrait of Moguloju Sai"
          priority
          className="h-auto w-full max-w-64 justify-self-start rounded-2xl object-cover md:max-w-none md:justify-self-end"
        />
      </div>
    </section>
  );
}
