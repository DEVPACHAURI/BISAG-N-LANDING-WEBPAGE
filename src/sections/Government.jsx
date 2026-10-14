import { GOV_LINKS, PARTNER_MINISTRIES } from '../data/government.js';
import Reveal from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function Government() {
  return (
    <section id="gov" aria-labelledby="gov-title" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal>
          <SectionHeading id="gov-title" title="Our government" />
        </Reveal>

        <Reveal>
          <ul className="flex flex-wrap gap-3">
            {GOV_LINKS.map(name => (
              <li key={name} className="rounded-md border border-line bg-surface-2 px-4 py-2.5 text-sm font-medium">
                {name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <h3 className="mb-4 mt-14 text-xl font-bold">Government stakeholders</h3>
          <ul className="flex flex-wrap gap-2">
            {PARTNER_MINISTRIES.map(name => (
              <li key={name} className="rounded-full border border-line px-4 py-1.5 text-sm font-semibold text-soft">
                {name}
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
