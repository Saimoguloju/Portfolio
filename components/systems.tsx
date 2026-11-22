import { profile } from "@/lib/profile";

export function Systems() {
  return (
    <section id="systems" className="bg-accent px-6 py-20 text-[#fffbf3] md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-serif text-4xl tracking-tight md:text-6xl">
          Four systems, one production stack.
        </h2>
        <ul className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {profile.systems.map((system) => (
            <li key={system.name}>
              <h3 className="font-serif text-3xl">{system.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#fff1e6]">{system.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
