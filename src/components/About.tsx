import { experiences } from '../data/experience';
import { projects } from '../data/projects';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeader index="01" title="Work History" />

        {/* Summary stats */}
        <div className="flex flex-wrap gap-6 mt-8 mb-16">
          {[
            { label: '총 경력', value: '약 8년' },
            { label: '재직 회사', value: '4곳' },
            { label: '개발 프로젝트', value: '17+' },
            { label: '플랫폼', value: 'Android · iOS · Web · Vehicle' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-[10px] font-mono tracking-widest text-[#6a6a88] mb-1"
                style={{ fontFamily: 'var(--font-mono)' }}>
                {s.label}
              </span>
              <span className="text-sm font-semibold text-[#eeeef8]"
                style={{ fontFamily: 'var(--font-display)' }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(0,212,255,0.25)] to-transparent" />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => {
              const expProjects = projects.filter((p) =>
                exp.projectIds.includes(p.id),
              );
              const featuredInExp = expProjects.filter((p) => p.isFeatured);
              const displayProjects = featuredInExp.length > 0
                ? featuredInExp.slice(0, 3)
                : expProjects.slice(0, 2);
              const remaining = expProjects.length - displayProjects.length;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row gap-0 md:gap-12">
                  {/* Period label */}
                  <div className="md:w-[180px] flex-shrink-0 relative pb-4 md:pb-0 md:text-right">
                    <div
                      className="text-[10px] font-mono tracking-wider text-[#6a6a88] leading-relaxed whitespace-pre-line"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {exp.period.replace(' · ', '\n')}
                    </div>
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute right-[-10px] top-[2px] w-[7px] h-[7px] rounded-full border border-[#00d4ff] bg-[#07070f] items-center justify-center">
                      <div className="w-[3px] h-[3px] rounded-full bg-[#00d4ff]" />
                    </div>
                    <div className="md:hidden absolute left-[-9px] top-[2px] w-[7px] h-[7px] rounded-full border border-[#00d4ff] bg-[#07070f]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pl-6 md:pl-0 border-l md:border-l-0 border-[rgba(255,255,255,0.06)]">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3
                        className="text-xl md:text-2xl font-bold text-[#eeeef8]"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {exp.company}
                      </h3>
                      <span
                        className="flex-shrink-0 text-[10px] font-mono tracking-widest text-[#00d4ff] border border-[rgba(0,212,255,0.25)] px-2 py-0.5 rounded-sm"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p
                      className="text-sm font-mono text-[#00d4ff] tracking-[0.12em] mb-3"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {exp.position}
                    </p>

                    <p className="text-[#9090b0] text-sm leading-relaxed mb-5 max-w-2xl">
                      {exp.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono tracking-wide text-[#6a6a88] border border-[rgba(255,255,255,0.07)] rounded-sm"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Projects preview */}
                    {expProjects.length > 0 && (
                      <div>
                        <p
                          className="text-[10px] font-mono tracking-widest text-[#6a6a88] mb-2.5"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          KEY PROJECTS · {expProjects.length}개
                        </p>
                        <div className="flex flex-col gap-1.5">
                          {displayProjects.map((proj) => (
                            <div
                              key={proj.id}
                              className="flex items-center gap-3 py-2 px-3 bg-[#0d0d1a] border border-[rgba(255,255,255,0.07)] rounded-sm"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: proj.accentColor }}
                              />
                              <span className="text-sm text-[#eeeef8] font-medium flex-1 min-w-0 truncate">
                                {proj.name}
                              </span>
                              <span className="text-[10px] text-[#6a6a88] flex-shrink-0">
                                {proj.platform.join(' · ')}
                              </span>
                              {proj.contribution && (
                                <span className="text-[10px] font-mono text-[#6a6a88] flex-shrink-0"
                                  style={{ fontFamily: 'var(--font-mono)' }}>
                                  {proj.contribution}
                                </span>
                              )}
                            </div>
                          ))}

                          {remaining > 0 && (
                            <a
                              href="#projects"
                              className="flex items-center gap-2 py-2 px-3 text-[11px] font-mono text-[#6a6a88] hover:text-[#00d4ff] transition-colors"
                              style={{ fontFamily: 'var(--font-mono)' }}
                            >
                              <span>+{remaining}개 더 보기 →</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div>
      <p
        className="text-[11px] font-mono tracking-[0.3em] text-[#00d4ff] mb-3"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {index} ──────
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold text-[#eeeef8]"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
    </div>
  );
}
