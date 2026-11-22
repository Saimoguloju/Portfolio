import { profile } from "@/lib/profile";

export function Hero() {
  return (
    <section id="top" className="hero-glow px-6 pb-24 pt-32 md:px-10 md:pb-36 md:pt-44">
      <div className="rise mx-auto max-w-6xl">
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
                className="underline decoration-accent underline-offset-4 hover:decoration-foreground"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
