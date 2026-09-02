import { useEffect, useRef, useState } from 'react';
import type { Project } from '../types';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ startX: number; startScroll: number; dragging: boolean }>({
    startX: 0,
    startScroll: 0,
    dragging: false,
  });

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (zoomedImage) {
        setZoomedImage(null);
      } else {
        onClose();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose, zoomedImage]);

  useEffect(() => {
    setZoomedImage(null);
  }, [project]);

  // 마우스 휠(세로) → 가로 스크롤 변환
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (el.scrollWidth <= el.clientWidth) return; // 스크롤 필요 없으면 무시
    // 세로 휠 값이 가로 값보다 크면 가로 스크롤로 사용
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  // 마우스 드래그로 스크롤 (데스크톱 편의용)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragState.current = { startX: e.clientX, startScroll: el.scrollLeft, dragging: true };
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragState.current.dragging || !scrollerRef.current) return;
    const dx = e.clientX - dragState.current.startX;
    scrollerRef.current.scrollLeft = dragState.current.startScroll - dx;
  };
  const endDrag = () => {
    dragState.current.dragging = false;
  };

  if (!project) return null;

  const accent = project.accentColor ?? '#00d4ff';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-[rgba(7,7,15,0.85)] backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative z-10 w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] bg-[#0d0d1a] border border-[rgba(255,255,255,0.12)] sm:rounded-sm overflow-hidden flex flex-col"
        style={{ boxShadow: `0 0 60px rgba(0,0,0,0.8), 0 0 0 1px ${accent}20` }}
      >
        {/* Header (동일, 생략 없이 유지) */}
        <div
          className="flex-shrink-0 p-6 md:p-8 border-b border-[rgba(255,255,255,0.07)]"
          style={{ borderTopColor: accent, borderTopWidth: 1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-[9px] font-mono tracking-widest px-2 py-1 rounded-sm"
              style={{
                fontFamily: 'var(--font-mono)',
                color: accent,
                backgroundColor: `${accent}15`,
                border: `1px solid ${accent}30`,
              }}
            >
              {project.type === 'personal' ? 'PERSONAL PROJECT' : project.company}
            </span>
            {project.period && (
              <span
                className="text-[9px] font-mono text-[#6a6a88] tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {project.period}
              </span>
            )}
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#eeeef8] mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {project.name}
              </h2>
              <p className="text-sm text-[#6a6a88]">{project.role}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#6a6a88] hover:text-[#eeeef8] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.25)] rounded-sm transition-all"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.platform.map((p) => (
              <span
                key={p}
                className="px-2 py-0.5 text-[9px] font-mono tracking-wider rounded-sm"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: accent,
                  backgroundColor: `${accent}10`,
                  border: `1px solid ${accent}20`,
                }}
              >
                {p}
              </span>
            ))}
            {project.tags
              .filter((t) => t !== 'all' && t !== 'personal')
              .map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[9px] font-mono tracking-wider text-[#6a6a88] border border-[rgba(255,255,255,0.07)] rounded-sm uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {t}
                </span>
              ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {project.images && project.images.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-4 rounded-full" style={{ backgroundColor: accent }} />
                <h4
                  className="text-[11px] font-mono tracking-[0.2em] text-[#eeeef8]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  SCREENSHOTS
                </h4>
              </div>
              <div
                ref={scrollerRef}
                className="flex gap-3 overflow-x-auto overflow-y-hidden pb-2 -mx-6 md:-mx-8 px-6 md:px-8 cursor-grab active:cursor-grabbing select-none"
                style={{ scrollbarWidth: 'thin' }}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
              >
                {project.images.map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 h-60 bg-[#06060f] rounded-sm border border-[rgba(255,255,255,0.06)] overflow-hidden flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={`${project.name} ${i + 1}`}
                      className="h-full w-auto object-contain cursor-zoom-in transition-transform duration-150 hover:scale-[1.02] pointer-events-auto"
                      draggable={false}
                      onClick={() => setZoomedImage(src)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <Section title="Overview" accent={accent}>
            <p className="text-[#9090b0] text-sm leading-relaxed">{project.overview}</p>
          </Section>

          <Section title="Tech Stack" accent={accent}>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] font-mono text-[#eeeef8] border border-[rgba(255,255,255,0.12)] rounded-sm"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {project.keyFeatures.length > 0 && (
            <Section title="Key Features" accent={accent}>
              <ul className="space-y-2">
                {project.keyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#9090b0]">
                    <span style={{ color: accent }} className="mt-1 flex-shrink-0 text-xs">◆</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.responsibilities.length > 0 && (
            <Section title="Responsibilities" accent={accent}>
              <ul className="space-y-2">
                {project.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-[#9090b0]">
                    <span style={{ color: accent }} className="mt-1 flex-shrink-0">▸</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.technicalExperience && project.technicalExperience.length > 0 && (
            <Section title="Technical Experience" accent={accent}>
              <div className="space-y-2">
                {project.technicalExperience.map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 p-3 bg-[#0a0a14] border border-[rgba(255,255,255,0.05)] rounded-sm"
                  >
                    <span style={{ color: accent }} className="text-xs mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-[#9090b0]">{t}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {project.contribution && (
            <Section title="Contribution" accent={accent}>
              <p className="text-[#9090b0] text-sm">{project.contribution}</p>
            </Section>
          )}
        </div>

        <div className="flex-shrink-0 px-6 md:px-8 py-4 border-t border-[rgba(255,255,255,0.07)] flex items-center justify-between">
          <span
            className="text-[10px] font-mono text-[#6a6a88]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {project.name}
          </span>
          <button
            onClick={onClose}
            className="text-[11px] font-mono tracking-widest text-[#6a6a88] hover:text-[#eeeef8] transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            CLOSE ✕
          </button>
        </div>
      </div>

      {zoomedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-[rgba(4,4,10,0.95)] backdrop-blur-md"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            alt="확대된 스크린샷"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 flex items-center justify-center text-[#eeeef8] border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] rounded-sm transition-all"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

function Section({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-4 rounded-full" style={{ backgroundColor: accent }} />
        <h4
          className="text-[11px] font-mono tracking-[0.2em] text-[#eeeef8]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {title.toUpperCase()}
        </h4>
      </div>
      {children}
    </div>
  );
}