import { useEffect, useState } from 'react';
import { NAV } from '../../data/navigation.js';
import Icon from '../ui/Icon.jsx';
import Logo from './Logo.jsx';

export default function MobileMenu({ onClose }) {
  const [expanded, setExpanded] = useState(null);

  const close = () => {
    setExpanded(null);
    onClose();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] xl:hidden">
      <button type="button" aria-label="Close menu" onClick={close} className="absolute inset-0 bg-black/60" />
      <aside
        id="mobile-menu"
        aria-label="Site menu"
        className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ink text-on-ink shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <Logo />
          <button type="button" onClick={close} className="rounded-md p-2 hover:bg-white/10" aria-label="Close menu">
            <Icon name="x" className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto p-3">
          {NAV.map((item) => (
            <li key={item.label} className="border-b border-white/5">
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    aria-expanded={expanded === item.label}
                    className="flex w-full items-center justify-between px-3 py-3.5 text-left font-medium"
                  >
                    {item.label}
                    <Icon name="chevron" className={`h-4 w-4 transition ${expanded === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {expanded === item.label && (
                    <ul className="pb-2">
                      {item.children.map((child) => (
                        <li key={child}>
                          <a onClick={close} href={item.href} className="block rounded-md px-5 py-2.5 text-sm text-on-ink-soft hover:bg-white/10">
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a onClick={close} href={item.href} className="block px-3 py-3.5 font-medium">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
