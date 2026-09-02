import { personalProjects } from '../data/projects';
import type { Project } from '../types';
import { SectionHeader } from './About';

interface Props {
  onSelect: (project: Project) => void;
}

const platformIcon: Record<string, string> = {
  Android: '🤖',
  iOS: '',
  Web: '🌐',
};

export default function PersonalProjects({ onSelect }: Props) {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <SectionHeader index="02" title="Personal Projects" />
          <p className="text-sm text-[#6a6a88] max-w-xs md:text-right">
            직접 기획하고 개발한 앱·웹 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {personalProjects.map((proj) => (
            <PersonalCard key={proj.id} project={proj} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonalCard({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const accent = project.accentColor ?? '#00d4ff';

  return (
    <button
      onClick={() => onSelect(project)}
      className="group relative text-left w-full bg-[#0d0d1a] border border-[rgba(255,255,255,0.07)] rounded-sm p-6 hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 overflow-hidden"
    >
      {/* Accent top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-20"
        style={{ backgroundColor: accent, opacity: 0.5 }}
      />
      {/* Hover glow */}
      <div
        className="absolute top-0 left-0 right-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
        style={{
          background: `radial-gradient(ellipse at top, ${accent}12 0%, transparent 70%)`,
        }}
      />

      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="-mx-6 -mt-6 mb-5 h-44 bg-[#06060f] overflow-hidden relative">
          <img
            src={src}
            alt={project.name}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div>
          <span
            className="inline-block text-[9px] font-mono tracking-[0.25em] px-2 py-1 mb-3 rounded-sm"
            style={{
              fontFamily: 'var(--font-mono)',
              color: accent,
              backgroundColor: `${accent}15`,
              border: `1px solid ${accent}30`,
            }}
          >
            PERSONAL
          </span>
          <h3
            className="text-lg font-bold text-[#eeeef8] group-hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.name}
          </h3>
        </div>
        <span className="text-xl opacity-60 ml-2">
          {project.platform.map((p) => platformIcon[p] ?? p).join('')}
        </span>
      </div>

      <p className="text-[#9090b0] text-sm leading-relaxed mb-5 relative z-10">
        {project.shortDescription}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] font-mono text-[#6a6a88] border border-[rgba(255,255,255,0.07)] rounded-sm"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span
            className="px-2 py-0.5 text-[10px] font-mono text-[#6a6a88]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            +{project.techStack.length - 5}
          </span>
        )}
      </div>

      {/* Arrow */}
      <div
        className="absolute bottom-5 right-5 text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover:translate-x-0"
        style={{ fontFamily: 'var(--font-mono)', color: accent }}
      >
        VIEW →
      </div>
    </button>
  );
}
