import { projects } from "@/data/projects";

const statusColor: Record<string, string> = {
  "In progress": "text-amber",
  Shipped: "text-teal",
  Prototype: "text-muted",
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-4 font-mono text-sm text-amber">04 — projects</p>
      <h2 className="mb-10 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Selected work
      </h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`group rounded-xl border border-border bg-panel p-6 transition-colors hover:border-teal/50 sm:p-8 ${
              project.featured ? "ring-1 ring-amber/20" : ""
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              </div>
              <span
                className={`whitespace-nowrap font-mono text-xs ${
                  statusColor[project.status]
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-ink/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.links && (
              <div className="mt-5 flex gap-4 font-mono text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-teal underline-offset-4 hover:underline"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
