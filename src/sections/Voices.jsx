import { useEffect, useState } from 'react';
import { VOICES } from '../data/home.js';
import useReducedMotion from '../hooks/useReducedMotion.js';
import Reveal from '../components/ui/Reveal.jsx';

export default function Voices() {
  const [idx, setIdx] = useState(0);
  const noMotion = useReducedMotion();

  useEffect(() => {
    if (noMotion) return;
    const t = setInterval(() => setIdx(i => (i + 1) % VOICES.length), 9000);
    return () => clearInterval(t);
  }, [noMotion]);

  const v = VOICES[idx];

  return (
    <section aria-labelledby="voices-title" className="bg-surface-2 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">

        <Reveal>
          <h2 id="voices-title" className="text-3xl font-bold sm:text-4xl">In their words</h2>
          <p className="mt-4 text-soft">Remarks from government leaders on space and geo-spatial technology.</p>
          <div role="group" aria-label="Choose a quote" className="mt-6 flex gap-2">
            {VOICES.map((voice, k) => (
              <button
                key={voice.name}
                type="button"
                onClick={() => setIdx(k)}
                aria-label={`Show quote from ${voice.name}`}
                aria-pressed={k === idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${k === idx ? 'w-12 bg-accent' : 'w-6 bg-line opacity-60 hover:opacity-100'}`}
              />
            ))}
          </div>
        </Reveal>

        <figure key={idx} className="fade-up rounded-xl border border-line bg-surface p-8 sm:p-10">
          <blockquote className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
            <p>&ldquo;{v.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-6">
            <span className="font-semibold">{v.name}</span>
            <span className="block text-sm text-soft">{v.role}</span>
          </figcaption>
        </figure>

      </div>
    </section>
  );
}
