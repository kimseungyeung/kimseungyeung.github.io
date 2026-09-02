import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import type { FilterTag, Project } from '../types';
import { SectionHeader } from './About';

const FILTERS: { label: string; value: FilterTag }[] = [
  { label: 'ALL', value: 'all' },
  { label: 'PERSONAL', value: 'personal' },
  { label: 'ANDROID', value: 'android' },
  { label: 'iOS', value: 'ios' },
  { label: 'WEB', value: 'web' },
  { label: 'WEBVIEW', value: 'webview' },
  { label: 'VEHICLE', value: 'vehicle' },
  { label: 'HARDWARE', value: 'hardware' },
  { label: 'BACKEND', value: 'backend' },
];

interface Props {
  onSelect: (project: Project) => void;
}

export default function AllProjects({ onSelect }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterTag>('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <SectionHeader index="04" title="All Projects" />
          <p className="text-sm text-[#6a6a88]">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-3 py-1.5 text-[10px] font-mono tracking-widest rounded-sm transition-all duration-200 ${
                activeFilter === f.value
                  ? 'bg-[#00d4ff] text-[#07070f]'
                  : 'border border-[rgba(255,255,255,0.1)] text-[#6a6a88] hover:border-[rgba(255,255,255,0.25)] hover:text-[#eeeef8]'
              }`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-[#6a6a88] font-mono text-sm"
            style={{ fontFamily: 'var(--font-mono)' }}>
            No projects in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((proj) => (
              <ProjectCard key={proj.id} project={proj} onSelect={onSelect} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const accent = project.accentColor ?? '#00d4ff';
  const isPersonal = project.type === 'personal';

  return (
    <button
      onClick={() => onSelect(project)}
      className="group relative text-left w-full bg-[#0d0d1a] border border-[rgba(255,255,255,0.07)] rounded-sm p-5 hover:border-[rgba(255,255,255,0.18)] transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ backgroundColor: accent, opacity: 0.4 }}
      />

      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="-mx-5 -mt-5 mb-4 h-32 bg-[#06060f] overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            {isPersonal ? (
              <span
                className="text-[9px] font-mono tracking-widest px-1.5 py-0.5 rounded-sm"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: accent,
                  backgroundColor: `${accent}15`,
                  border: `1px solid ${accent}30`,
                }}
              >
                PERSONAL
              </span>
            ) : (
              <span
                className="text-[9px] font-mono tracking-widest text-[#6a6a88]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {project.company}
              </span>
            )}
          </div>
          <h3
            className="text-base font-bold text-[#eeeef8] group-hover:text-white transition-colors truncate"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.name}
          </h3>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] font-mono text-[#6a6a88]" style={{ fontFamily: 'var(--font-mono)' }}>
          {project.period}
        </span>
        <span className="w-px h-3 bg-[rgba(255,255,255,0.1)]" />
        <span className="text-[10px] font-mono text-[#6a6a88] truncate" style={{ fontFamily: 'var(--font-mono)' }}>
          {project.platform.join(' · ')}
        </span>
      </div>

      <p className="text-xs text-[#6a6a88] leading-relaxed mb-4 flex-1">
        {project.shortDescription}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags
          .filter((t) => t !== 'all' && t !== 'personal')
          .map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[9px] font-mono tracking-wider text-[#6a6a88] border border-[rgba(255,255,255,0.07)] rounded-sm uppercase"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Role */}
      <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between">
        <span className="text-[10px] text-[#6a6a88]">{project.role}</span>
        <span
          className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ fontFamily: 'var(--font-mono)', color: accent }}
        >
          VIEW →
        </span>
      </div>
    </button>
  );
}
