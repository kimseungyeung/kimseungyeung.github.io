export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-[#0a0a14] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Section label */}
        <p
          className="text-[11px] font-mono tracking-[0.3em] text-[#00d4ff] mb-6"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          06 ──────
        </p>

        {/* Main heading */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#eeeef8] leading-none mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          LET&apos;S BUILD
          <br />
          <span className="text-[#00d4ff]">THE FUTURE</span>
        </h2>

        <p className="text-[#6a6a88] text-base md:text-lg max-w-lg leading-relaxed mb-16">
          새로운 프로젝트, 협업, 또는 채용 문의가 있으시면 언제든지 연락해 주세요.
        </p>

        {/* Contact card */}
        <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="mailto:seungyeung1@naver.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00d4ff] text-[#07070f] font-bold text-sm rounded-sm hover:bg-white transition-colors duration-200"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            seungyeung1@naver.com
          </a>

          {/* GitHub — update with your actual URL */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[rgba(255,255,255,0.15)] text-[#eeeef8] font-semibold text-sm rounded-sm hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-200"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GITHUB
          </a>
        </div>

        {/* Divider + footer */}
        <div className="mt-24 pt-8 border-t border-[rgba(255,255,255,0.07)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span
            className="text-[11px] font-mono text-[#6a6a88] tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            김승영 · MOBILE DEVELOPER
          </span>
          <span
            className="text-[11px] font-mono text-[#3a3a55] tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Built with React + Vite + Tailwind CSS
          </span>
        </div>
      </div>
    </section>
  );
}
