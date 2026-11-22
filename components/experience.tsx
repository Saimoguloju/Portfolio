import { profile } from "@/lib/profile";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl border-t border-line pt-16">
        <h2 className="font-serif text-4xl tracking-tight md:text-6xl">Experience</h2>
        <ol className="mt-12">
          {profile.experience.map((role) => (
            <li key={role.org} className="grid gap-3 border-t border-line py-10 md:grid-cols-12 md:gap-10">
              <p className="text-sm text-muted md:col-span-3">{role.dates}</p>
              <div className="md:col-span-9">
                <h3 className="text-xl">
                  {role.title}
                  <span className="text-muted"> · {role.org}</span>
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{role.summary}</p>
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
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-8 text-sm text-muted">
          {profile.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
