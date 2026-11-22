import { profile } from "@/lib/profile";

export function Principles() {
  return (
    <section aria-labelledby="principles-heading" className="px-6 py-8 md:px-10">
      <div className="mx-auto max-w-6xl border-t border-line pt-16">
        <h2 id="principles-heading" className="text-xs uppercase tracking-[0.22em] text-accent">
          Working principles
        </h2>
        <ul className="mt-10 divide-y divide-line">
          {profile.principles.map((principle) => (
            <li key={principle.label} className="grid gap-4 py-10 md:grid-cols-12 md:gap-10">
              <p className="text-sm text-accent md:col-span-3">{principle.label}</p>
              <p className="font-serif text-2xl leading-snug tracking-tight md:col-span-9 md:text-4xl">
                {principle.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
