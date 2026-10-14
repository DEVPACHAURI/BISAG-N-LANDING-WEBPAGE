import { STATS } from '../data/home.js';
import Reveal from '../components/ui/Reveal.jsx';
import CountUp from '../components/ui/CountUp.jsx';

export default function Achievements() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="bg-ink py-20 text-on-ink sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal>
          <h2 id="impact-title" className="text-3xl font-bold sm:text-4xl">Our work in numbers</h2>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, k) => (
            <Reveal key={stat.label} delay={k * 80}>
              <div className="border-l-2 border-highlight pl-5">
                <dt className="font-display text-5xl font-bold sm:text-6xl">
                  <CountUp to={stat.n} suffix="+" />
                </dt>
                <dd className="mt-2 text-on-ink-soft">{stat.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

      </div>
    </section>
  );
}
