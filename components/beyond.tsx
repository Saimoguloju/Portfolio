import { profile } from "@/lib/profile";

export function Beyond() {
  return (
    <section id="beyond" className="px-6 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-6xl border-t border-line pt-16">
        <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-7xl">Beyond code</h2>
        <ul className="mt-12 divide-y divide-line">
          <li className="grid gap-4 py-10 md:grid-cols-12 md:gap-10">
            <p className="text-sm text-accent md:col-span-3">Exploring</p>
            <p className="font-serif text-2xl leading-snug tracking-tight md:col-span-9 md:text-3xl">
              {profile.interests}
            </p>
          </li>
          <li className="grid gap-4 py-10 md:grid-cols-12 md:gap-10">
            <p className="text-sm text-accent md:col-span-3">Community</p>
            <p className="font-serif text-2xl leading-snug tracking-tight md:col-span-9 md:text-3xl">
              {profile.community}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
