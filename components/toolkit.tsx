import { profile } from "@/lib/profile";

export function Toolkit() {
  return (
    <section id="toolkit" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl border-t border-line pt-16">
        <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-7xl">Toolkit</h2>
        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {profile.skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-xs uppercase tracking-[0.22em] text-accent">{group.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
