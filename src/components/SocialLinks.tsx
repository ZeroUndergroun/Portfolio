const GITHUB_PATH =
  'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12';

/** Same circular, translucent, monochrome treatment as the carousel controls. */
const buttonClass =
  'inline-flex items-center justify-center rounded-full bg-white/10 p-3 text-gray-100 transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gray-400';

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="https://www.linkedin.com/in/ryan-torrez-39530414a"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ryan Torrez on LinkedIn"
        className={buttonClass}
      >
        {/* LinkedIn is not in simple-icons (trademark removal), so this is a filled
            approximation of the "in" mark, matching GitHub's solid weight. */}
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <circle cx="5" cy="5.6" r="2.1" />
          <rect x="3.1" y="8.8" width="3.8" height="11.6" rx="0.5" />
          <path d="M9.4 8.8h3.6v1.6a4.1 4.1 0 013.7-1.9c3 0 4.4 1.9 4.4 5.2v6.7h-3.8v-6.1c0-1.6-.6-2.5-1.9-2.5-1.4 0-2.2 1-2.2 2.5v6.1H9.4z" />
        </svg>
      </a>

      <a
        href="https://github.com/ZeroUndergroun"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ryan Torrez on GitHub"
        className={buttonClass}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d={GITHUB_PATH} />
        </svg>
      </a>
    </div>
  );
}
