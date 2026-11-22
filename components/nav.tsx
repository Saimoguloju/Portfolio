import { profile } from "@/lib/profile";

const items = [
  { label: "Work", href: "#work" },
  { label: "Systems", href: "#systems" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-accent/50 bg-[#f6c4ae]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <a href="#top" className="shrink-0 text-sm tracking-wide">
          {profile.name}
        </a>
        <nav aria-label="Page">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-accent">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
