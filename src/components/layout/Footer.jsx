import Logo from './Logo.jsx';

const links = [
  { label: 'About us', href: '#about' },
  { label: 'What we do', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Notices', href: '#notices' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-on-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            An independent redesign for assesment.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-on-ink">Explore</h2>
          <ul className="space-y-2 text-sm">
            {links.map(link => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-ink-accent">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-on-ink">Offices</h2>
          <p className="text-sm leading-relaxed">
            Gandhinagar Gujarat<br />New Delhi
          </p>
          <p className="mt-4 text-sm">
            Total visitors: <span className="font-semibold text-on-ink">5,314,194</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
