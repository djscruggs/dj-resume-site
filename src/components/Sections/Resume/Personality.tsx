import { FC, memo } from 'react';

import { SectionId } from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';

const behaviors = [
  'Works at a faster-than-average pace, producing results in accordance with schedules',
  'Detail-oriented; makes and follows a plan, follows up to ensure completion',
  'Focused on operational efficiencies — getting things done quickly without losing quality',
  'Builds and leverages relationships to get work done',
  'Fluent, enthusiastic communicator; motivates others and attends to their points of view',
  'Collaborative; focused on team cohesion, dynamics, and interpersonal relations',
];

const Personality: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 scroll-mt-16" noPadding sectionId={SectionId.Personality}>
      <div className="mx-auto max-w-screen-lg px-4 lg:px-8">
        {/* pt-0 so it visually continues from the About section above.
            pb-0 so the border-b is flush, matching the divide lines inside Resume. */}
        <div className="border-b-2 border-neutral-300 py-8">
          <ResumeSection title="Personality">
            <div className="flex flex-col gap-y-6">
              {/* Type card */}
              <div className="flex items-start gap-x-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1a8fc1] text-white">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path
                      d="M12 3c-1.5 0-3 .8-3.8 2.1L3.5 13a4.4 4.4 0 0 0 3.8 6.6h9.4a4.4 4.4 0 0 0 3.8-6.6L15.8 5.1A4.4 4.4 0 0 0 12 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 8v4m0 4h.01" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#1a8fc1]">
                    Predictive Index — Behavioral Profile
                  </p>
                  <h3 className="text-xl font-bold text-neutral-800">Altruist</h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Congenial and cooperative with an efficient, precise work ethic. Unassuming, genuinely interested in
                    people, and a strong intuitive understanding of them.
                  </p>
                </div>
              </div>

              {/* Strongest behaviors */}
              <ul className="flex flex-col gap-y-2">
                {behaviors.map((b, i) => (
                  <li className="flex items-start gap-x-2 text-sm text-neutral-600" key={i}>
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* PDF link */}
              <div>
                <a
                  className="inline-flex items-center gap-x-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm text-neutral-600 transition-colors hover:border-[#1a8fc1] hover:text-[#1a8fc1]"
                  href="/assets/dj-scruggs-predictive-index.pdf"
                  rel="noopener noreferrer"
                  target="_blank">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path
                      d="M12 10v6m0 0-3-3m3 3 3-3M3 17v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download full report (PDF)
                </a>
              </div>
            </div>
          </ResumeSection>
        </div>
      </div>
    </Section>
  );
});

Personality.displayName = 'Personality';
export default Personality;
