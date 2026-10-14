import { OFFICES } from '../data/offices.js';
import Reveal from '../components/ui/Reveal.jsx';
import Icon from '../components/ui/Icon.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-page py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal>
          <SectionHeading id="contact-title" title="Find us" />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {OFFICES.map((office, k) => (
            <Reveal key={office.city} delay={k * 80}>
              <a
                href={office.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full gap-4 rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent"
              >
                <span className="mt-1 text-accent">
                  <Icon name="pin" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-lg font-bold">{office.city}</span>
                  <span className="mt-1 block leading-relaxed text-soft">{office.address}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Open in Maps
                    <Icon name="ext" className="h-4 w-4" />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
