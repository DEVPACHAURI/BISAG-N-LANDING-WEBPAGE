import { useState } from 'react';
import { TEAM } from '../data/team.js';
import { initials } from '../utils/initials.js';
import Reveal from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

const depts = Object.keys(TEAM);

export default function Team() {
  const [active, setActive] = useState(depts[0]);
  const members = TEAM[active];

  return (
    <section id="team" aria-labelledby="team-title" className="bg-surface-2 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal>
          <SectionHeading id="team-title" title="Meet the team" />
        </Reveal>

        <div role="tablist" aria-label="Departments" className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {depts.map(dept => (
            <button
              key={dept}
              type="button"
              role="tab"
              aria-selected={active === dept}
              aria-controls="team-panel"
              onClick={() => setActive(dept)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active === dept
                  ? 'border-accent bg-accent text-accent-ink'
                  : 'border-line text-soft hover:border-accent hover:text-main'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div id="team-panel" role="tabpanel" aria-label={active} key={active} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, k) => (
            <div
              key={m.name}
              style={{ animationDelay: `${k * 50}ms` }}
              className="fade-up flex items-center gap-4 rounded-lg border border-line bg-surface p-5"
            >
              <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                {initials(m.name)}
              </span>
              <div>
                <h3 className="font-semibold leading-snug">{m.name}</h3>
                <p className="mt-0.5 text-sm text-soft">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
