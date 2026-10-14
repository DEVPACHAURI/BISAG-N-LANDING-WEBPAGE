import { STORIES } from '../data/news.js';
import Reveal from '../components/ui/Reveal.jsx';
import Icon from '../components/ui/Icon.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

const cardBase = 'flex h-full flex-col rounded-lg border border-line bg-surface p-6';

function StoryBody({ story }) {
  return (
    <>
      <h3 className="text-xl font-bold leading-snug">{story.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-soft">{story.text}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        {story.source}
        {story.href && <Icon name="ext" className="h-4 w-4" />}
      </span>
    </>
  );
}

export default function Stories() {
  return (
    <section aria-labelledby="stories-title" className="bg-page py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal>
          <SectionHeading
            id="stories-title"
            title="In the news"
            text="Public services and government workflows that BISAG-N applications have supported."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {STORIES.map((story, k) => (
            <Reveal key={story.title} delay={k * 80}>
              {story.href
                ? <a href={story.href} target="_blank" rel="noreferrer" className={`${cardBase} transition-colors hover:border-accent`}><StoryBody story={story} /></a>
                : <div className={cardBase}><StoryBody story={story} /></div>
              }
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
