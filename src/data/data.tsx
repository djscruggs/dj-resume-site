import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import SubstackIcon from '../components/Icon/SubstackIcon';
import ThreadsIcon from '../components/Icon/ThreadsIcon';
import heroImage from '../images/hero.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "DJ Scruggs' Resume",
  description: "Built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  'Work History': 'work History',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm DJ.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Arkansas-based <strong className="text-stone-100">Full Stack Software Engineer</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I like to walk my dog <strong className="text-stone-100">Monkey</strong>, explore the hidden gems of{' '}
        <strong className="text-stone-100">Northwest Arkansas</strong>, and maintain the{' '}
        <strong className="text-stone-100 underline">
          <a href="https://realweb3db.com/">Real Web3 database</a>
        </strong>
        .
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/DJ Scruggs resume.pdf',
      text: 'Resume (PDF)',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a serial entrepreneur and full stack developer who thrives on solving problems with code. I have multiple eight-figure exits, a few misses, and tons of learning experiences along the way. I love my work and expect to never completely retire.`,
  aboutItems: [
    {label: 'Location', text: 'Fayetteville, AR', Icon: MapIcon},
    {label: 'Age', text: '55', Icon: CalendarIcon},
    {label: 'Nationality', text: 'USA / Scottish', Icon: FlagIcon},
    {label: 'Interests', text: 'Fiction, Animals, Social Scienes', Icon: SparklesIcon},
    {label: 'Study', text: 'Northwestern University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Entrepreneur', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Ruby on Rails',
        level: 8,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Python',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'jQuery',
        level: 8,
      },
      {
        name: 'Mithril.js',
        level: 8,
      },
    ],
  },

  {
    name: 'Business',
    skills: [
      {
        name: 'Finance & Accounting',
        level: 8,
      },
      {
        name: 'Public Speaking',
        level: 8,
      },
      {
        name: 'Sales',
        level: 7,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Cryptocurrencies and the Future of Capital',
    description: 'Presentation at CrowdConverge 2018',
    url: 'https://www.youtube.com/watch?v=I6lEePGdcJ8',
    image: porfolioImage1,
  },
  {
    title: 'ContentBLVD',
    description:
      'CTO at innovative influencer marketplace. Built in Node with Mithril, CoffeeScript PostgreSQL, and jQuery',
    url: 'https://web.archive.org/web/20150315001613/https://www.contentblvd.com/',
    image: porfolioImage3,
  },
  {
    title: 'StatsMix',
    description: 'CTO of TechStars company, built in Ruby on Rails, MySQL, jQuery, Highcharts',
    url: 'https://web.archive.org/web/20110511191703/http://www.statsmix.com/',
    image: porfolioImage4,
  },
  {
    title: 'SurveyGizmo',
    description:
      'Fifth employee, doing everything from code to sales. Built in PHP, Zend Framework and jQuery.',
    url: 'https://surveygizmo.com/',
    image: porfolioImage2,
  },

  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  //},
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  //},
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  //},
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  //},
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  //},
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  //},
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  //},
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '1986-1990',
    location: 'Northwestern University',
    title: 'Bachelor of Science, Music Education',
    content: (
      <div>
        <p>
          I decided by my senior year that I didn't want to teach, but NU is expensive so I took the degree and became
          one of those classic liberal arts major who had no idea what he wanted to do.
        </p>
        <p>Luckily, I found out that I have an entrepreneurial instinct and a knack for computers.</p>
      </div>
    ),
  },
  {
    date: '2003',
    location: 'Sandler Sales Institute',
    title: 'Submarine Sales Methodology',
    content: (
      <div>
        <p>
          Innovative sales method that trained me to, above all, not act like a salesman. See <a className="textblue underline" href="https://www.derekscruggs.com/up-front-contracts.html">this post</a> on my blog about one key concept, the <span className="italic">Up Front Contract</span>.
        </p>
      </div>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2017 - Present',
    location: 'BlueSpruce Holdings',
    title: 'Co-founder & Managing Partner',
    content: (
      <p>
        Led the purchase, management and sale of 330 multifamily apartments. Handled all asset management, finance and
        investor relations. Implemented the{' '}
        <a className="underline" href="https://www.eosworldwide.com/">
          EOS
        </a>{' '}
        system for business management. Automated our investor communications with ActiveCampaign, Zapier, Buildium, EZ
        Texting and more.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Content BLVD',
    title: 'CTO',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },

  {
    date: 'March 2007 - February 2010',
    location: 'Staunch Robots',
    title: 'VP Services',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Avenir International',
    title: 'CTO',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'StatsMix',
    title: 'CTO',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'SurveyGizmo',
    title: 'VP Sales and Business Development',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: '2005 - 2007',
    location: 'Enthusiast Group',
    title: 'CEO & Co-Founder',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: '1999 - 2001',
    location: 'MessageMedia',
    title: 'Chief Privacy Officer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: '1996 - 1999',
    location: 'Distributed Bits',
    title: 'CEO & Co-Founder',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Dan Ripoll, CEO, ContentBLVD',
      text: "DJ is a great asset to any software development team. He's a bonafide team player, and commits himself 110%. My team and I were lucky to have someone of his caliber on board at Content BLVD. And I'd be honored to work with DJ in the future.",
      image:
        'https://media.licdn.com/dms/image/C5103AQHu3DU5eg---w/profile-displayphoto-shrink_200_200/0/1516317441322?e=1704326400&v=beta&t=y2Z5LBN1Jne40_wej7q4GBCSG0AywnUljIXTFqy5Fj4',
    },
    {
      name: 'Peter Klipfel, direct report at StatsMix',
      text: 'DJ had a wide breadth of knowledge, and kept us focused on the technical tasks that drove the product forward.',
      image:
        'https://media.licdn.com/dms/image/D5635AQFNAsCPqrj6VQ/profile-framedphoto-shrink_200_200/0/1694808819316?e=1699664400&v=beta&t=6sJpCt_R76bBo_l-eqcqCTbdK9NeBybimXXcYCzawMM',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.",
  items: [
    {
      type: ContactType.Email,
      text: 'me@djscruggs.com',
      href: 'mailto:me@djscruggs.com',
    },
    {
      type: ContactType.Phone,
      text: '303-808-6614',
      href: 'tel:303-808-6614',
    },
    {
      type: ContactType.Location,
      text: 'Fayetteville AR, USA',
      href: 'https://www.google.com/maps/place/Fayetteville,+AR',
    },
    {
      type: ContactType.Github,
      text: 'derekscruggs',
      href: 'https://github.com/derekscruggs',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/derekscruggs'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/djscruggs/'},
  {label: 'Substack', Icon: SubstackIcon, href: 'https://oldprogrammer.substack.com/'},
  {label: 'Threads', Icon: ThreadsIcon, href: 'https://www.threads.net/@derekscruggs'},
];
