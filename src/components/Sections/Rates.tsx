import { FC, memo } from 'react';

import { rates, SectionId } from '../../data/data';
import Section from '../Layout/Section';

interface RatesProps {
  fullWidth?: boolean;
}

const Rates: FC<RatesProps> = memo(({ fullWidth }) => {
  const { description, items } = rates;

  return (
    <Section className="bg-neutral-100" fullWidth={fullWidth} sectionId={SectionId.Rates}>
      <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
        <div className="col-span-1 flex justify-center md:justify-start">
          <div className="relative h-max">
            <h2 className="text-xl font-bold uppercase text-neutral-800">RATES</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
          </div>
        </div>
        <div className="col-span-1 flex flex-col md:col-span-3">
          <div className="mb-4">
            <p className="text-sm text-neutral-800 ">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ title, description, rate }, idx) => (
              <li className="col-span-2 flex flex-col items-start" key={idx}>
                <div className="text-lg font-bold text-neutral-800">{title}</div>
                <div className="text-xs italic text-neutral-800 mb-2">{rate}</div>
                <div className="text-md text-neutral-600">{description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

export default Rates;
