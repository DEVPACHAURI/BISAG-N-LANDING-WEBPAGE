import { useEffect, useState } from 'react';
import { NAV } from '../../data/navigation.js';
import useScrolled from '../../hooks/useScrolled.js';
import Icon from '../ui/Icon.jsx';
import Logo from './Logo.jsx';
import MobileMenu from './MobileMenu.jsx';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(24);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 bg-ink transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-black/25' : ''}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAV.map(item => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium text-on-ink transition hover:bg-white/10"
                >
                  {item.label}
                  {item.children && <Icon name="chevron" className="h-3.5 w-3.5" />}
                </a>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full z-10 w-72 rounded-lg border border-white/10 bg-ink-deep p-2 opacity-0 shadow-2xl transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.children.map(child => (
                      <li key={child}>
                        <a href={item.href} className="block rounded-md px-3 py-2 text-sm text-on-ink-soft transition hover:bg-white/10 hover:text-ink-accent">
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="rounded-md p-2 text-on-ink hover:bg-white/10 xl:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Icon name="menu" className="h-6 w-6" />
        </button>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
}
