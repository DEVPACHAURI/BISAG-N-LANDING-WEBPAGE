import useScrolled from '../../hooks/useScrolled.js';
import Icon from '../ui/Icon.jsx';

export default function BackToTop() {
  const visible = useScrolled(600);
  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-40 rounded-full bg-ink-accent p-3 text-ink-deep shadow-lg transition duration-300 hover:-translate-y-0.5 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <Icon name="up" />
    </a>
  );
}
