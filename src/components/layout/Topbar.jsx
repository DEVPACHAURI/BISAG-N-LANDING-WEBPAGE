import Icon from '../ui/Icon.jsx';

const sizeButtons = [
  { label: 'A-', name: 'Smaller text', action: 'smaller' },
  { label: 'A', name: 'Default text size', action: 'reset' },
  { label: 'A+', name: 'Larger text', action: 'larger' },
];

export default function Topbar({ theme, onToggleTheme, fontScale }) {
  return (
    <div className="border-b border-white/10 bg-ink-deep text-xs text-on-ink-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <p className="truncate">BISAG redesign assesment.</p>
        <div className="flex items-center gap-1" role="group" aria-label="Display settings">
          {sizeButtons.map(btn => (
            <button key={btn.label} type="button" onClick={fontScale[btn.action]} aria-label={btn.name}
              className="rounded px-2 py-1 font-semibold text-on-ink transition hover:bg-white/10">
              {btn.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="ml-2 rounded p-1.5 text-on-ink transition hover:bg-white/10"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
