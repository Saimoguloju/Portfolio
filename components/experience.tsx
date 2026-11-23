import Image from "next/image";
import { profile } from "@/lib/profile";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl border-t border-line pt-16">
        <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-7xl">Experience</h2>
        <ol className="mt-12">
          {profile.experience.map((role) => (
            <li key={role.org} className="grid gap-3 border-t border-line py-10 md:grid-cols-12 md:gap-10">
              <p className="text-sm text-muted md:col-span-3">{role.dates}</p>
              <div className="md:col-span-9">
                <h3 className="flex items-center gap-3 text-xl">
                  {role.logo ? (
                    <Image src={role.logo} alt="" width={36} height={36} className="size-9 rounded-md" />
                  ) : null}
                  <span>
                    {role.title}
                    <span className="text-muted">
                      {" · "}
                      {role.orgUrl ? (
                        <a
                          href={role.orgUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-accent underline-offset-4 hover:text-foreground"
                        >
                          {role.org}
                        </a>
                      ) : (
                        role.org
                      )}
                    </span>
                  </span>
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{role.summary}</p>
                {role.highlights ? (
                  <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                    {role.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-2">
          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-muted">Education</h3>
            <p className="mt-4 text-xl">{profile.education.degree}</p>
            <p className="mt-2 text-muted">{profile.education.school}</p>
            <p className="mt-1 text-sm text-muted">{profile.education.dates}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{profile.certifications}</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-muted">Also</h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted">{profile.community}</p>
            <p className="mt-4 max-w-md leading-relaxed text-muted">{profile.interests}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
