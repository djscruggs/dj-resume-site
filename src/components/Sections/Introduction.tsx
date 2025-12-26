import { FC, memo } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Introduction: FC = memo(() => {
  const { description } = heroData;

  return (
    <Section className="bg-neutral-900" sectionId={SectionId.Hero}>
      <div className="flex flex-col gap-y-6">{description}</div>
    </Section>
  );
});

Introduction.displayName = 'Introduction';
export default Introduction;
