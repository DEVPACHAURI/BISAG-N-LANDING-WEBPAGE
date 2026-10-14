import { useEffect, useState, Suspense, lazy } from 'react';
import { SLIDES } from '../../data/home.js';
import useReducedMotion from '../../hooks/useReducedMotion.js';
import Icon from '../ui/Icon.jsx';


const GlobeScene = lazy(() => import('./GlobeScene.jsx'));

const INTERVAL = 7000;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const noMotion = useReducedMotion();
  const slide = SLIDES[idx];

  useEffect(() => {
    if (paused || noMotion) return;
    const t = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused, noMotion]);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden bg-ink text-on-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-12 pt-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-24">

        <div key={idx} className="fade-up min-h-[18rem]">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-accent">{slide.tag}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{slide.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-ink-soft">{slide.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="rounded-md bg-ink-accent px-5 py-3 font-semibold text-ink-deep transition hover:brightness-110">
              See what we do
            </a>
            <a href="#contact" className="rounded-md border border-white/25 px-5 py-3 font-semibold text-on-ink transition hover:bg-white/10">
              Get in touch
            </a>
          </div>
        </div>

        <figure className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
          <div className="relative h-[300px] w-full sm:h-[360px]">
            <Suspense fallback={<div className="flex h-full items-center justify-center text-sm text-on-ink-soft">Loading...</div>}>
              <GlobeScene reduced={noMotion} />
            </Suspense>
          </div>
          <figcaption className="mt-3 text-sm text-on-ink-soft">{slide.stat}</figcaption>
        </figure>

      </div>

      {/* slide controls */}
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 pb-10 sm:px-6">
        <button type="button" onClick={() => setIdx(i => (i - 1 + SLIDES.length) % SLIDES.length)} className="rounded-full border border-white/20 p-2 transition hover:bg-white/10" aria-label="Previous slide">
          <Icon name="left" className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {SLIDES.map((_, k) => (
            <button
              key={k}
              type="button"
              onClick={() => setIdx(k)}
              aria-label={`Slide ${k + 1}`}
              aria-current={k === idx}
              className={`h-2 rounded-full transition-all duration-300 ${k === idx ? 'w-8 bg-ink-accent' : 'w-2 bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => setIdx(i => (i + 1) % SLIDES.length)} className="rounded-full border border-white/20 p-2 transition hover:bg-white/10" aria-label="Next slide">
          <Icon name="right" className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
