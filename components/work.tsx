import { profile } from "@/lib/profile";

export function Work() {
  return (
    <section id="work" className="px-6 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Selected work</h2>
        <div className="mt-10">
          {profile.work.map((item) => (
            <article key={item.title} className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <p className="text-sm text-accent md:col-span-3">{item.meta}</p>
              <div className="md:col-span-9">
                <h3 className="font-serif text-3xl tracking-tight md:text-5xl">{item.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                  {item.summary}
                </p>
                {item.links ? (
                  <ul className="mt-5 flex gap-5 text-sm">
                    {item.links.map((link) => (
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
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
