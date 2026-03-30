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
import HashnodeIcon from '../components/Icon/HashnodeIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import SubstackIcon from '../components/Icon/SubstackIcon';
import heroImage from '../images/hero.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage8 from '../images/portfolio/portfolio-8.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  RatesSection,
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
  description: 'Summary of skills, rates, and work history',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Personality: 'personality',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Rates: 'rates',
  Work: 'work',
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
  name: `Hi, I'm DJ!`,
  description: (
    <>
      <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg w-2/3">
        <p>
          I've spent 30 years building software, usally at the earliest stage, before there's a roadmap or a playbook.
          These days I'm focused on a problem that matters: how do you verify age online without creating a surveillance
          system? I founded{' '}
          <strong className="text-stone-100 underline">
            <a href="https://cardlessid.org/" target="_blank">
              Cardless ID
            </a>
          </strong>{' '}
          to answer that question, and I serve as Technical Advisor to a bipartisan coalition of state Attorneys General
          on child online safety.
        </p>
      </div>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Portfolio}`,
      text: 'Portfolio',
      primary: false,
    },
    {
      href: `#${SectionId.Rates}`,
      text: 'Rates',
      primary: false,
    },
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
//calculate age from now so I don't have to edit it every birthday
//taken from https://stackoverflow.com/questions/55200748/calculate-age-from-date-of-birth-user-input-value-in-react
const calculate_age = (dob: string) => {
  const birthDate = new Date(dob);
  const difference = Date.now() - birthDate.getTime();
  const age = new Date(difference);
  return Math.abs(age.getUTCFullYear() - 1970);
};
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a digital strategist, real estate investor, fractional CTO and full stack developer who excels at solving problems with code. I have multiple eight-figure exits and tons of learning experiences along the way. I love to work and expect to never stop building things.`,
  aboutItems: [
    { label: 'Location', text: 'Oklahoma City, OK', Icon: MapIcon },
    { label: 'Age', text: calculate_age('1968-07-19').toString(), Icon: CalendarIcon },
    { label: 'Nationality', text: 'USA', Icon: FlagIcon },
    { label: 'Interests', text: 'Writing, Music, Social Sciences', Icon: SparklesIcon },
    { label: 'Study', text: 'Northwestern University', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Entrepreneur', Icon: BuildingOffice2Icon },
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
        level: 9,
      },
      {
        name: 'Ruby on Rails',
        level: 8,
      },
      {
        name: 'LLM APIs (various)',
        level: 8,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'PHP',
        level: 9,
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
        level: 9,
      },
      {
        name: 'Typescript',
        level: 8,
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
        level: 10,
      },
      {
        name: 'Public Speaking',
        level: 9,
      },
      {
        name: 'Sales',
        level: 8,
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
    title: 'Blockchain Rangers',
    url: 'https://csds.blockchainrangers.com/',
    image: porfolioImage7,
  },
  {
    title: 'Cardless ID',
    url: 'https://cardlessid.org/',
    image: porfolioImage8,
  },
  {
    title: 'TRYBE Personal Development',
    url: 'https://github.com/djscruggs/trybe',
    image: porfolioImage5,
  },
  {
    title: 'Automated Pentration Testing Reporting System',
    url: 'https://github.com/APTRS/APTRS/releases/tag/1.0',
    image: porfolioImage6,
  },
  {
    title: 'ContentBLVD',
    // description: 'Chief Technology Officer at Content BLVD.',
    url: 'https://web.archive.org/web/20150315001613/https://www.contentblvd.com/',
    image: porfolioImage3,
  },
  {
    title: 'StatsMix',
    // description: 'Chief Technology Officer at StatsMix',
    url: 'https://web.archive.org/web/20110511191703/http://www.statsmix.com/',
    image: porfolioImage4,
  },
  {
    title: 'SurveyGizmo',
    // description: '(Acquired and renamed Alchemer)',
    url: 'https://surveygizmo.com/',
    image: porfolioImage2,
  },
];

/**
 * Education section
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
          one of those classic liberal arts major who had no idea what he wanted to do. Luckily I discovered I have an
          entrepreneurial instinct and a knack for computers.
        </p>
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
          Innovative sales method that trained me to, above all, not act like a salesman. See{' '}
          <a className="textblue underline" href="https://www.derekscruggs.com/up-front-contracts.html">
            this post
          </a>{' '}
          on my blog about one key concept, the <span className="italic">Up Front Contract</span>.
        </p>
      </div>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2025 - present',
    location: 'Attorney Generals Alliance',
    title: 'Technical Advisor, Partnership for Youth Online Safety',
    content: (
      <p>
        Advise a bipartisan coalition of state Attorneys General and industry leaders on child online safety, with a
        focus on decentralized identity (DID) for age verification and flagging AI-generated deepfakes.
      </p>
    ),
  },
  {
    date: 'October 2023 - present',
    title: 'Freelance Senior Software Engineer (Product)',
    content: (
      <div>
        <ul>
          <li style={{ marginBottom: '0.5rem' }}>
            <a className="underline" href="https://cardlessid.org/" target="_blank">
              Cardless ID
            </a>{' '}
            — A nonprofit age verification platform to age-gate websites in compliance with local laws. The website uses
            React Router V7 and Firebase, while the backend leverages the Algorand blockchain for decentralized
            identity. The mobile app in development is built on Expo with a custom Algorand wallet providing verifiable
            credentials without centralized identity storage.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a className="underline" href="https://github.com/djscruggs/did-resolver-agent" target="_blank">
              did-resolver-agent
            </a>{' '}
            — A chain-agnostic MCP server that lets humans issue cryptographically signed Verifiable Credentials to AI
            agents, scoping their permissions without relying on a central authority.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a className="underline" href="https://blockchainrangers.com/">
              Blockchain Rangers
            </a>{' '}
            — A full-stack blockchain scam detection system with multi-factor risk scoring and real-time smart contract
            analysis across EtherScan, SolScan, Helius, and TON Center APIs. Vanilla JavaScript front end with Flask
            backend. Uses DeepSeek LLM to analyze scraped token/project data and generate structured risk assessments.
            Also features a comprehensive{' '}
            <a className="underline" href="https://csds.blockchainrangers.com/llms.txt">
              llms.txt
            </a>{' '}
            interface to take advantage of LLMs and x402 payments.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a className="underline" href="https://github.com/djscruggs/trybe">
              TRYBE
            </a>{' '}
            — A full-stack PWA in React/Remix with Prisma/Supabase as the backend and Fly.io for deployment. Currently
            in alpha testing, serving more than a thousand paying customers and tens of thousands free users.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a className="underline" href="https://penelopetrunk.com/" target="_blank">
              Penelope Trunk
            </a>{' '}
            — Built a new email marketing platform and migrated her blog from WP Engine to a VPS on DigitalOcean.
            Migrated off Hubspot to a custom version of{' '}
            <a className="underline" href="https://mailster.co/" target="_blank">
              Mailster
            </a>
            , lowering cost from $25,000/year to less than $1,500. Rewrote the Mailster automation component to scale to
            200,000 messages/day via Amazon SES.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a className="underline" href="https://github.com/djscruggs/aptrs-react">
              Automated Penetration Testing Reporting System
            </a>{' '}
            — Built an entirely new React/Vite/Tailwind front end for an outdated Python app, now serving more than
            2,000 security professionals.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Nikozi Music (
            <a className="underline" href="https://worldbuild.fwb.help/">
              FWB/Worldcoin hackathon
            </a>
            ) — A Worldcoin mini-app providing Spotify-style music functions integrated with the Worldcoin
            proof-of-humanity Mini App ecosystem.
          </li>
        </ul>
      </div>
    ),
  },
  {
    date: 'June 2017 - October 2023',
    location: 'BlueSpruce Holdings',
    title: 'Managing Partner & Technology Lead',
    content: (
      <p>
        Led the purchase, management and sale of 330 multifamily apartments while personally building and maintaining a
        turnkey investor communication platform. Raised $5 million in equity capital, delivered 7% annual cash flow, and
        architected the full technology stack for investor reporting and deal management.
      </p>
    ),
  },
  {
    date: 'October 2010 - January 2013',
    location: 'StatsMix',
    title: 'Chief Technology Officer',
    content: (
      <p>
        Led all technical development — frontend, backend, infrastructure, and API integrations — of a SaaS providing
        custom analytics integrated with third-party reporting tools such as Google Analytics, Stripe, Mailchimp, and
        more than 30 others. Core technology included Ruby on Rails, MySQL, jQuery, Highcharts, and 30+ web APIs.
      </p>
    ),
  },
  {
    date: 'January 2008 - August 2010',
    location: 'SurveyGizmo',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Joined as employee number five and third technical employee. Helped convert a PHP app running on a single server
        into a Zend Framework app running on clusters on two continents, serving customers in 80 countries as the
        company scaled to 50+ employees. Built integrations with Salesforce and ExactTarget, supported the API, and
        rebuilt the payment system to support complex billing for enterprise customers.
      </p>
    ),
  },
  {
    date: 'March 2015 - June 2017',
    location: 'Content BLVD',
    title: 'Chief Technology Officer',
    content: (
      <p>
        Stepped in to rescue a stalled influencer marketplace after two prior CTOs failed. Rather than discarding the
        existing codebase, salvaged the Node-based API and built an entirely new front end encompassing multiple
        market-driven changes. Successfully launched within five months, serving more than ten thousand users. Node and
        PostgreSQL backend with Mithril/CoffeeScript front end, deployed on Heroku.
      </p>
    ),
  },
  {
    date: 'August 2014 - March 2015',
    location: 'Staunch Robots',
    title: 'Technical Lead',
    content: (
      <p>
        Stepped in to rescue a stalled project for a US client by rebuilding the agile process and managing distributed
        developers in South America and Europe. Translated complex requirements across language and timezone barriers to
        deliver a working product. Primary tech stack was Ruby on Rails with MySQL and PostgreSQL backends.
      </p>
    ),
  },
  {
    date: 'January 2014 - August 2014',
    location: 'Avenir International',
    title: 'Chief Technology Officer',
    content: (
      <p>
        Led a complex technical conversion from on-premises software to a multi-tenant SaaS architecture compliant with
        HIPAA and related regulations for medical environments. Underlying technology included Ruby on Rails,
        PostgreSQL, Cisco IP Phones, and Twilio.
      </p>
    ),
  },
  {
    date: 'December 1998 - December 2001',
    location: 'MessageMedia',
    title: 'Chief Privacy Officer',
    content: (
      <p>
        Devised and enforced spam-prevention policies for one of the first email marketing companies. Led a PR and
        marketing initiative to highlight the company's thought leadership in permission marketing, winning major
        enterprise accounts such as Cisco Systems and Dell Computer.
      </p>
    ),
  },
  {
    date: 'March 1996 - December 1998',
    location: 'Distributed Bits',
    title: 'CEO & Co-Founder',
    content: (
      <p>
        Created the industry's first email customer service platform, landing major clients such as Consumer Reports and
        the Chicago Board Options Exchange. The company was acquired by MessageMedia, providing a 700% return to
        investors in two years.
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
      name: 'Penelope Trunk',
      text: "DJ is smart, patient and a great executor. I'm constantly shocked by how quickly he gets things done and how much his input improves the original idea.",
      image: '/assets/penelope-trunk.jpg',
    },
    {
      name: 'Tameem Rahal, founder of TRYBE',
      text: "DJ has been a fantastic asset to our startup as we build towards an MVP. He's fully led the development of our web app, helping us productize our online community into a service we can scale and offer to others. I appreciate the tools he's implemented for us to help make the iterative process easy and manageable, and being able to adapt to new ideas and point out holes in our design. We're eager to see the final MVP come to life and are very happy with having DJ lead its development. Not to mention, he's a great human to chat and work with, which always makes the process even better. Thanks DJ!",
      image: '/assets/tameem-rahal.jpg',
    },
    {
      name: 'Sourav Kalal, Engineering lead on APTRS',
      text: "Working with DJ on APTRS was such a fantastic experience! He took the lead on building the entire frontend from the ground up and wowed us all with his amazing skills while adding great features. DJ's technical know-how and knack for solving problems made a huge difference in tackling the challenges we faced, and thanks to his hard work, we got the project out on time. It was truly a joy to collaborate with DJ on this project!",
      image: '/assets/sourav-kalal.jpeg',
    },
    {
      name: 'Dan Ripoll, CEO, ContentBLVD',
      text: "DJ is a great asset to any software development team. He's a bonafide team player, and commits himself 110%. My team and I were lucky to have someone of his caliber on board at Content BLVD. And I'd be honored to work with DJ in the future.",
      image: '/assets/dan-ripoll.jpg',
    },
    {
      name: 'Robin Diebel',
      text: 'During my time working closely with DJ at BlueSpruce, I had the opportunity to witness his exceptional leadership and organizational skills firsthand. His ability to effectively lead and inspire a team was truly commendable. DJ consistently demonstrated a strong vision for the company and effectively communicated it to the entire team, fostering a sense of purpose and motivation among employees.',
      image: 'assets/robin-diebel.jpg',
    },
    {
      name: 'Peter Klipfel, direct report at StatsMix',
      text: 'DJ had a wide breadth of knowledge, and kept us focused on the technical tasks that drove the product forward.',
      image: '/assets/peter-klipfel.png',
    },
  ],
};

/**
 * Rates section
 */
export const rates: RatesSection = {
  title: 'Rates',
  description:
    'I offer three multiple levels of engagement. Rates are based on the number of hours per month and and the nature of the work. These rates are adjustable based on the exact scope of your project.',
  items: [
    {
      title: 'Strategist',
      description:
        'I serve as your technical advisor, focusing on high-level technology decisions and roadmapping. I help your business evaluate its tech stack, identify opportunities for innovation, and make informed decisions about technology investments without getting involved in day-to-day implementation',
      rate: '$200 per hour',
    },
    {
      title: 'CTO',
      description:
        "I provide comprehensive technology leadership that combines strategic planning with operational oversight. I manage technology budgets, lead technical teams, establish technology governance, and align technical initiatives with business objectives. I act as a bridge between your technical teams and executive leadership while ensuring your company's technical vision is executed effectively. ",
      rate: '$150 per hour',
    },
    {
      title: 'Senior Developer',
      description:
        'I work directly with your development teams as a hands-on technical leader to improve code quality, implement best practices, and solve complex technical challenges. I provide technical mentorship and help establish coding standards while actively participating in development tasks.',
      rate: '$100 per hour',
    },
    {
      title: 'Hired Gun',
      description:
        "I dive in and crank out code. I'm a great fit for projects that need a quick turnaround or specific technical expertise.",
      rate: '$70 per hour',
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
      text: 'Oklahoma City, OK, USA',
      href: 'https://www.google.com/maps/place/Oklahoma+City,+OK',
    },
    {
      type: ContactType.Github,
      text: 'djscruggs',
      href: 'https://github.com/djscruggs',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/djscruggs/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/djscruggs' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/djscruggs/' },
  { label: 'Hashnode', Icon: HashnodeIcon, href: 'https://djscruggs.hashnode.dev/' },
  { label: 'Substack', Icon: SubstackIcon, href: 'https://djcodes.substack.com/' },
];
