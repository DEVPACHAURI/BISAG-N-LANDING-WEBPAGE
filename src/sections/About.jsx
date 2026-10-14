import Reveal from '../components/ui/Reveal.jsx';
import Icon from '../components/ui/Icon.jsx';

const domains = ['Satellite communication', 'Geo-informatics', 'Geo-spatial technology'];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">

        <Reveal>
          <h2 id="about-title" className="text-3xl font-bold sm:text-4xl">
            Bhaskaracharya National Institute for Space Applications and Geo-informatics
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {domains.map(d => (
              <li key={d} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-soft">{d}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-lg leading-relaxed text-soft">
            BISAG-N is an autonomous scientific society under MeitY, Government of India, registered under the Societies
            Registration Act, 1860. It develops technology, runs research and development, supports national and international
            cooperation, builds capacity, and helps move technology into use and grow geo-spatial enterprise.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-soft">
            The work rests on three areas: satellite communication, geo-informatics and geo-spatial technology.
          </p>
          <a href="#services" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:underline">
            See what we do
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>

      </div>
    </section>
  );
}
