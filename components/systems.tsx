import { profile } from "@/lib/profile";

export function Systems() {
  return (
    <section id="systems" className="bg-accent px-6 py-20 text-on-accent md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-5xl uppercase leading-[0.95] md:text-7xl">
          Built for live traffic, not demos.
        </h2>
        <ul className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {profile.systems.map((system) => (
            <li key={system.name}>
              <h3 className="font-display text-3xl uppercase">{system.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-on-accent/90">{system.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {system.stack.map((tool) => (
                  <li key={tool} className="rounded-full border border-on-accent/50 px-2.5 py-0.5 text-xs">
                    {tool}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
