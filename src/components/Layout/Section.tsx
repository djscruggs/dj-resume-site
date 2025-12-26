import classNames from 'classnames';
import { FC, memo, PropsWithChildren } from 'react';

import { SectionId } from '../../data/data';

const Section: FC<
  PropsWithChildren<{
    sectionId: SectionId;
    sectionTitle?: string;
    noPadding?: boolean;
    fullWidth?: boolean;
    className?: string;
  }>
> = memo(({ children, sectionId, noPadding = false, fullWidth = false, className }) => {
  return (
    <section className={classNames(className, { 'px-4 py-16 md:py-24 lg:px-8': !noPadding })} id={sectionId}>
      <div className={classNames({ 'mx-auto max-w-screen-lg': !noPadding && !fullWidth })}>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
