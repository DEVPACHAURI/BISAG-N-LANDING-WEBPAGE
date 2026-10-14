import { SERVICES } from '../data/services.js';
import Reveal from '../components/ui/Reveal.jsx';
import Icon from '../components/ui/Icon.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-page py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal>
          <SectionHeading
            id="services-title"
            title="What we do"
            text="Nine areas of work, from satellite broadcasting to training geo-spatial professionals."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((svc, k) => (
            <Reveal key={svc.title} delay={(k % 4) * 60} className={svc.big ? 'sm:col-span-2' : ''}>
              <article className="flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent sm:p-7">
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Icon name={svc.icon} className="h-5 w-5" />
                </span>
                <h3 className={`font-bold ${svc.big ? 'text-2xl' : 'text-lg'}`}>{svc.title}</h3>
                <p className="mt-2 leading-relaxed text-soft">{svc.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
