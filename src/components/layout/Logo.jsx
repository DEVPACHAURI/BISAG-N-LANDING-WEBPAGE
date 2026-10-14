export default function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="BISAG-N home">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <circle cx="20" cy="20" r="9" fill="#6dd4ca" />
        <ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#c47f1a" strokeWidth="2" transform="rotate(-24 20 20)" />
        <circle cx="35" cy="12.5" r="2.6" fill="#c47f1a" />
      </svg>
      <span className="leading-tight">
        <span className="font-display block text-xl font-bold text-on-ink">BISAG-N</span>
        <span className="hidden text-[11px] text-on-ink-soft sm:block">Space Applications and Geo-informatics</span>
      </span>
    </a>
  );
}
