import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { FC, memo } from 'react';

import { SectionId } from '../../data/data';
import Socials from '../Socials';

//calculate  copyright year 
let year = new Date().getFullYear().toString()
if (year !== '2023') {
  year = "2023 - " + year.toString();
}
const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-500">
        <Socials />
      </div>
      <a
        className="-m-2 flex items-center gap-x-1 rounded-md p-2 ring-yellow focus:outline-none focus:ring-2"
        href="https://github.com/tbakerx/react-resume-template">
        <span>
          Built on <span className="text-white">React Resume Template</span>
        </span>
      </a>
      <span className="text-sm text-neutral-700">© Copyright {year} DJ Scruggs</span>
      <a href="https://www.freepik.com/free-vector/comic-abstract-blue-background_7997344.htm#query=hero%20background&position=1&from_view=keyword&track=ais">
        Backgound image by dgim-studio on Freepik
      </a>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
