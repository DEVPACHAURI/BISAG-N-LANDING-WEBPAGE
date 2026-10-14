/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      colors: {
        page: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        main: 'var(--text)',
        soft: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        'accent-ink': 'var(--accent-ink)',
        highlight: 'var(--highlight)',
        ink: 'var(--ink)',
        'ink-deep': 'var(--ink-deep)',
        'ink-accent': 'var(--ink-accent)',
        'on-ink': 'var(--on-ink)',
        'on-ink-soft': 'var(--on-ink-soft)',
      },
    },
  },
  plugins: [],
};
