import { useCallback, useLayoutEffect, useState } from 'react';

const STORAGE_KEY = 'bisag-theme';

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {
    // Storage can be blocked (private mode, strict settings). Use the system setting instead.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** Returns [theme, toggleTheme] and keeps <html data-theme> in sync. */
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Layout effect runs before paint, so the page never flashes the wrong theme.
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // Ignore: the choice still applies for this visit.
    }
  }, [theme]);

  return [theme, toggleTheme];
}
