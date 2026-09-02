import { skillGroups } from '../data/skills';
import { SectionHeader } from './About';

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeader index="05" title="Tech Skills" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {skillGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>

        {/* Note */}
        <p
          className="mt-10 text-[11px] font-mono text-[#6a6a88] tracking-wide"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          * 기술 스택은 실무 및 개인 프로젝트에서 직접 경험한 기술을 기준으로 정리했습니다.
        </p>
      </div>
    </section>
  );
}

function SkillCard({ group }: { group: (typeof skillGroups)[number] }) {
  const accent = group.accentColor;

  return (
    <div className="bg-[#0d0d1a] border border-[rgba(255,255,255,0.07)] rounded-sm p-6 hover:border-[rgba(255,255,255,0.12)] transition-colors duration-300">
      {/* Group header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
        <h3
          className="text-[11px] font-mono tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-mono)', color: accent }}
        >
          {group.name.toUpperCase()}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 text-[11px] font-mono text-[#9090b0] border border-[rgba(255,255,255,0.08)] rounded-sm hover:text-[#eeeef8] hover:border-[rgba(255,255,255,0.2)] transition-colors duration-150 cursor-default"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
