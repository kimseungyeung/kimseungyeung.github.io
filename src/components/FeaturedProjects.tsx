import { featuredProjects } from '../data/projects';
import type { Project } from '../types';
import { SectionHeader } from './About';

interface Props {
  onSelect: (project: Project) => void;
}

export default function FeaturedProjects({ onSelect }: Props) {
  return (
    <section id="featured" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <SectionHeader index="03" title="Featured Projects" />
          <p className="text-sm text-[#6a6a88] max-w-xs md:text-right">
            주요 회사 프로젝트
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {featuredProjects.map((proj, i) => (
            <FeaturedCard key={proj.id} project={proj} index={i} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  const accent = project.accentColor ?? '#00d4ff';
  const isLarge = index === 0;

  return (
    <button
      onClick={() => onSelect(project)}
      className={`group relative text-left w-full bg-[#0d0d1a] border border-[rgba(255,255,255,0.07)] rounded-sm overflow-hidden hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 ${
        isLarge ? 'md:col-span-2' : ''
      }`}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${accent}08 0%, transparent 60%)`,
        }}
      />

      {/* Thumbnail — non-large cards only */}
      {!isLarge && project.thumbnail && (
        <div className="h-44 bg-[#06060f] overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className={`relative z-10 p-6 md:p-8 ${isLarge ? 'md:flex md:gap-12' : ''}`}>
        {/* Index + company */}
        <div className={`${isLarge ? 'md:w-48 flex-shrink-0' : ''} mb-6 md:mb-0`}>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[10px] font-mono tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', color: accent }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: `${accent}30` }} />
          </div>

          {project.company && (
            <p
              className="text-[10px] font-mono tracking-widest text-[#6a6a88] mb-2"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {project.company}
            </p>
          )}

          {/* Platform badges */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.platform.map((p) => (
              <span
                key={p}
                className="px-2 py-0.5 text-[9px] font-mono tracking-widest rounded-sm"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: accent,
                  backgroundColor: `${accent}10`,
                  border: `1px solid ${accent}25`,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h3
            className="text-xl md:text-2xl font-bold text-[#eeeef8] mb-3 group-hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.name}
          </h3>

          <p className="text-[#9090b0] text-sm leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Key responsibilities preview */}
          <ul className="space-y-1.5 mb-6">
            {project.technicalExperience?.slice(0, isLarge ? 4 : 3).map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#6a6a88]">
                <span style={{ color: accent }} className="mt-1 flex-shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono text-[#6a6a88] border border-[rgba(255,255,255,0.07)] rounded-sm"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span className="text-[10px] font-mono text-[#6a6a88]" style={{ fontFamily: 'var(--font-mono)' }}>
                +{project.techStack.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: accent }}
      />

      {/* Arrow */}
      <div
        className="absolute top-6 right-6 md:top-8 md:right-8 text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-200"
        style={{ fontFamily: 'var(--font-mono)', color: accent }}
      >
        VIEW DETAIL →
      </div>
    </button>
  );
}
