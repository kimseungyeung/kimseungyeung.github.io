export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center dot-grid overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-24 pb-16 w-full">
        {/* Tag line */}
        <p
          className="text-[#00d4ff] text-xs tracking-[0.3em] mb-8 font-mono"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          &lt;MOBILE.DEVELOPER /&gt;
        </p>

        {/* Name */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[108px] font-black leading-none tracking-tight mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block text-[#eeeef8]">김승영</span>
        </h1>

        {/* Title row */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span
            className="text-sm font-mono text-[#6a6a88] tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            iOS / Android Developer
          </span>
          <span className="w-px h-4 bg-[rgba(255,255,255,0.2)]" />
          <span
            className="text-sm font-mono text-[#6a6a88] tracking-[0.1em]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Mobile · Vehicle · Web
          </span>
        </div>

        {/* Description */}
        <p
          className="max-w-xl text-base md:text-lg text-[#9090b0] leading-relaxed mb-12"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Android Native을 중심으로 iOS, WebView, 차량/하드웨어, Backend까지
          경험한 모바일 개발자입니다.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:seungyeung1@naver.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#07070f] text-sm font-semibold rounded-sm hover:bg-white transition-colors duration-200"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <IconMail />
            EMAIL
          </a>

          {/* GitHub — update href with your actual GitHub URL */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(255,255,255,0.15)] text-[#eeeef8] text-sm font-semibold rounded-sm hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-200"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <IconGitHub />
            GITHUB
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm text-[#6a6a88] hover:text-[#eeeef8] transition-colors duration-200 ml-2"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            VIEW PROJECTS →
          </a>
        </div>

        {/* Quick tags */}
        <div className="mt-16 flex flex-wrap gap-2">
          {[
            'Kotlin',
            'Swift',
            'Jetpack Compose',
            'SwiftUI',
            'MVVM',
            'Firebase',
            'Serial RS232',
            'GNSS',
            'Spring Boot',
            'React',
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] tracking-widest font-mono text-[#6a6a88] border border-[rgba(255,255,255,0.07)] rounded-sm"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg))' }}
      />
    </section>
  );
}

function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}
