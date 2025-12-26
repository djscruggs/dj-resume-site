import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo, useCallback, useMemo, useState } from 'react';

import { heroData, SectionId } from '../../data/data';
import { useNavObserver } from '../../hooks/useNavObserver';
import Socials from '../Socials';

export const sidebarID = 'sidebar';

const Sidebar: FC = memo(() => {
  const { imageSrc, name, actions } = heroData;
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);

  const navSections = useMemo(
    () => [SectionId.About, SectionId.Work, SectionId.Portfolio, SectionId.Testimonials, SectionId.Rates, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    if (section) setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <aside
      className="fixed left-0 top-0 z-50 hidden h-screen w-2/5 flex-col justify-between overflow-y-auto bg-neutral-900 p-6 md:flex lg:p-8"
      id={sidebarID}>
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-y-6">
        <div className="relative h-32 w-32 overflow-hidden rounded-full">
          <Image alt={`${name}-profile`} className="h-full w-full object-cover" priority src={imageSrc} />
        </div>
        <h1 className="text-center text-3xl font-bold text-white lg:text-4xl">{name}</h1>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-1 flex-col items-center justify-center gap-y-4">
        {navSections.map(section => {
          const isActive = section === currentSection;
          return (
            <Link
              className={classNames(
                'rounded-md p-2 text-lg font-medium capitalize transition-colors duration-300 first-letter:uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500',
                isActive ? 'text-orange-500' : 'text-neutral-100 hover:text-orange-500',
              )}
              href={`/#${section}`}
              key={section}>
              {section}
            </Link>
          );
        })}
      </nav>

      {/* Action Buttons & Social Links */}
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex w-full flex-col gap-y-3">
          {actions.map(({ href, text, primary, Icon }) => (
            <a
              className={classNames(
                'flex items-center justify-center gap-x-2 rounded-full border-2 px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2',
                primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
              )}
              href={href}
              key={text}>
              {text}
              {Icon && <Icon className="h-5 w-5 text-white" />}
            </a>
          ))}
        </div>
        <div className="flex gap-x-4 text-neutral-100">
          <Socials />
        </div>
      </div>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';
export default Sidebar;
