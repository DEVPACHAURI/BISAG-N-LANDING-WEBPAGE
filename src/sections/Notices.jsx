import { NOTICES } from '../data/news.js';
import Reveal from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function Notices() {
  return (
    <section id="notices" aria-labelledby="notices-title" className="bg-page py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal>
          <SectionHeading id="notices-title" title="Notices" text="Current openings and announcements. Sample entries are shown for this demo." />
        </Reveal>

        <Reveal>
          <div className="overflow-x-auto rounded-lg border border-line bg-surface">
            <table className="w-full min-w-[560px] text-left">
              <caption className="sr-only">Current notices with publication and closing dates</caption>
              <thead className="border-b border-line text-sm text-soft">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Published</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Subject</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Last date</th>
                </tr>
              </thead>
              <tbody>
                {NOTICES.map(notice => (
                  <tr key={notice.subject} className="border-b border-line transition last:border-0 hover:bg-accent-soft">
                    <td className="whitespace-nowrap px-5 py-4 text-soft">{notice.published}</td>
                    <td className="px-5 py-4 font-medium">{notice.subject}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-soft">{notice.lastDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
