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
  description: "Summary of skills, rates, and work history",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
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
      <p className='text-3xl font-bold text-stone-50'>I thrive in the gap between <span className='text-yellow'>people</span> and <br />the <span className='text-yellow'>value</span> they seek from <span className='text-yellow'>software</span>. </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg w-2/3">
        I'm a <strong className="text-stone-100">serial entrepreneur with multiple exits</strong> and a <strong>full stack software engineer</strong> in Northwest Arkansas.
      
        In my spare time I like to walk my dog <strong className="text-stone-100">Monkey</strong>, and write the{' '}
        <strong className="text-stone-100 underline">
          <a href="https://djcodes.substack.com/">DJ Codes</a>
        </strong> newsletter on Substack.
      </p>
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
}
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a digital strategist, real estate investor, fractional CTO and full stack developer who excels at solving problems with code. I have multiple eight-figure exits and tons of learning experiences along the way. I love to work and expect to never stop building things.`,
  aboutItems: [
    { label: 'Location', text: 'Fayetteville, AR', Icon: MapIcon },
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
          one of those classic liberal arts major who had no idea what he wanted to do. Luckily I discovered I have an entrepreneurial instinct and a knack for computers.
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
          Innovative sales method that trained me to, above all, not act like a salesman. See <a className="textblue underline" href="https://www.derekscruggs.com/up-front-contracts.html">this post</a> on my blog about one key concept, the <span className="italic">Up Front Contract</span>.
        </p>
      </div>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2024 - present',
    location: 'Penelope Trunk',
    title: 'Freelance',
    content: (
      <div>
        <p style={{ marginBottom:1+'rem' }}>
          Penelope Trunk is a well-known blogger who writes about careers, personal development and autism. I am building a new email marketing platform and migrating her blog from WP Engine to a VPS on DigitalOcean.
        </p>
        <ul>
          <li style={{ marginBottom:'0.5rem', marginLeft: '1rem', listStyleType: 'disc',  paddingLeft: '.5rem' }}>
            Migrated off Hubspot to a custom version of <a className='underline' href="https://mailster.co/" target="_blank">Mailster</a>, a Wordpress plugin, lowering cost from $25,000 per year to less than $1,500.
          </li>
          <li style={{ marginBottom:'0.5rem', marginLeft: '1rem', listStyleType: 'disc',  paddingLeft: '.5rem' }}>
            Rewrote the Mailster automation component to scale to up to 200,000 messages per day via Amazon Simple Email Service.
          </li>
          <li style={{ marginBottom:'0.5rem', marginLeft: '1rem', listStyleType: 'disc',  paddingLeft: '.5rem' }}>
            Customized the Wordpress and PHP instances to handle long running, high-memory cron tasks.
          </li>
        </ul>
        
      </div>
    ),
  },
  {
    date: '2023 - present',
    location: 'Open source projects',
    title: 'Freelance',
    content: (
      <div>
        <p style={{ marginBottom:1+'rem' }}>
          Working on two open source projects that I built from scratch.
        </p>
        <ul>
          <li style={{ marginBottom:'0.5rem' }} >
            <a className='underline' href="https://github.com/djscruggs/aptrs-react">APTRS</a> - React front-end to a Python API for penetration testing. Uses Vite, Tailwind CSS, Material-Tailwind theme
          </li>
          <li style={{ marginBottom:'0.5rem' }}>
            <a className='underline' href="https://github.com/djscruggs/trybe">TRYBE</a> -  a full stack PWA built in Remix with Prisma/Supabase as back end and Fly.io for deployment
          </li>
        </ul>
        <p style={{ marginBottom:1+'rem', marginTop:1+'rem' }}>
          Also assisting <a className='underline' href="https://buildcities.network/">BuildCities.network</a> with their decentralized funding platform.
        </p>
        
      </div>
    ),
  },
  {
    date: '2017 - 2023',
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
    date: 'March 2015 - June 2017',
    location: 'Content BLVD',
    title: 'Chief Technology Officer',
    content: (
      <p>
        Managed the complete product lifecycle for an influencer marketplace. Oversaw strategic planning, resolved tech issues, and delivered a viable product in just 5 months (succeeding when two predecessors failed). Migrated prototype from Moveable Type to use Node and PostgreSQL backend with Mithril/Coffeescript front end.
      </p>
    ),
  },

  {
    date: 'August 2014 - March 2015',
    location: 'Staunch Robots',
    title: 'VP Services',
    content: (
      <p>
        Led project management and development for four Ruby on Rails projects.
      </p>
    ),
  },
  {
    date: 'January 2014 - August 2014',
    location: 'Avenir International',
    title: 'Chief Technology Officer',
    content: (
      <p>
        Led all technical development of a SaaS providing time- and role-based paging for hospital staff to be contacted for urgent critical care tasks.
        Underlying technology included Ruby on Rails, PostgreSQL, Cisco IP Phones and Twilio.
      </p>
    ),
  },
  {
    date: 'October 2010 - January 2013',
    location: 'StatsMix',
    title: 'Chief Technology Officer',
    content: (
      <p>
        Led all technical development of a SaaS providing custom analytics integrated with third party reporting tools such as Google Analytics, Mailchimp and dozens of others.
        Core technology included Ruby on Rails, MySQL, jQuery, Highcharts and web APIs.
      </p>
    ),
  },
  {
    date: 'January 2008 - August 2010',
    location: 'SurveyGizmo',
    title: 'VP Sales and Business Development',
    content: (
      <p>
        Led sales during explosive growth period from $130,000 to $3 million in just two years. Also developed several key platform elements such as SalesForce integration, and entirely re-wrote the billing system. Core technology included PHP, MySQL, Zend Framework and web APIs.
      </p>
    ),
  },
  {
    date: 'March 2006 - November 2007',
    location: 'Enthusiast Group',
    title: 'Co-Founder',
    content: (
      <p>
        Created a B2C social media platform for extreme sports enthusiasts. Core technology included PHP, MySQL, Drupal and JavaScript.
      </p>
    ),
  },
  {
    date: 'December 1998 - December 2001',
    location: 'MessageMedia',
    title: 'Chief Privacy Officer',
    content: (
      <p>
        Devised and enforced spam-prevention policies for one of the first email marketing companies. Devised and executed a PR and marketing initiative
        to highlight the company's thought leadership in permission marketing, leading us to win major enterprise accounts such as Cisco Systems and Dell Computer.
      </p>
    ),
  },
  {
    date: 'March 1996 - December 1998',
    location: 'Distributed Bits',
    title: 'CEO & Co-Founder',
    content: (
      <p>
        Created the industry's first email customer service platform, landing major clients such as Consumer Reports and the Chicago Board Options Exchange.
        The company was acquired by MessageMedia, providing a 700% return to investors in two years.
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
      name: 'Tameem Rahal, founder of TRYBE',
      text: 'DJ has been a fantastic asset to our startup as we build towards an MVP. He\'s fully led the development of our web app, helping us productize our online community into a service we can scale and offer to others. I appreciate the tools he\'s implemented for us to help make the iterative process easy and manageable, and being able to adapt to new ideas and point out holes in our design. We\'re eager to see the final MVP come to life and are very happy with having DJ lead its development. Not to mention, he\'s a great human to chat and work with, which always makes the process even better. Thanks DJ!',
      image:
        '/assets/tameem-rahal.jpg',
    },
    {
      name: 'Sourav Kalal, Engineering lead on APTRS',
      text: 'Working with DJ on APTRS was such a fantastic experience! He took the lead on building the entire frontend from the ground up and wowed us all with his amazing skills while adding great features. DJ\'s technical know-how and knack for solving problems made a huge difference in tackling the challenges we faced, and thanks to his hard work, we got the project out on time. It was truly a joy to collaborate with DJ on this project!',
      image:
        '/assets/sourav-kalal.jpeg',
    },
    {
      name: 'Dan Ripoll, CEO, ContentBLVD',
      text: "DJ is a great asset to any software development team. He's a bonafide team player, and commits himself 110%. My team and I were lucky to have someone of his caliber on board at Content BLVD. And I'd be honored to work with DJ in the future.",
      image: '/assets/dan-ripoll.jpg',
    },
    {
      name: "Robin Diebel",
      text: "During my time working closely with DJ at BlueSpruce, I had the opportunity to witness his exceptional leadership and organizational skills firsthand. His ability to effectively lead and inspire a team was truly commendable. DJ consistently demonstrated a strong vision for the company and effectively communicated it to the entire team, fostering a sense of purpose and motivation among employees.",
      image: 'assets/robin-diebel.jpg'
    },
    {
      name: 'Peter Klipfel, direct report at StatsMix',
      text: 'DJ had a wide breadth of knowledge, and kept us focused on the technical tasks that drove the product forward.',
      image:
        '/assets/peter-klipfel.png',
    }
  ],
};

/**
 * Rates section
 */
export const rates: RatesSection = {
  title: 'Rates',
  description: 'I offer three levels of engagement. Rates are based on the number of hours per month and and the nature of the work. These rates are adjustable based on the exact scope of your project.',
  items: [
    {
      title: 'Strategist',
      hoursPerMonth: '10 hours per month',
      description: 'I serve as your technical advisor, focusing on high-level technology decisions and roadmapping. I help your business evaluate its tech stack, identify opportunities for innovation, and make informed decisions about technology investments without getting involved in day-to-day implementation',
      rate: '$200 per hour',
    },
    {
      title: 'Senior Developer',
      hoursPerMonth: '40 hours per month',
      description: 'I work directly with your development teams as a hands-on technical leader to improve code quality, implement best practices, and solve complex technical challenges. I provide technical mentorship and help establish coding standards while actively participating in development tasks.',
      rate: '$100 per hour',
    },
    {
      title: 'CTO',
      hoursPerMonth: '80 hours per month',
      description: 'I provide comprehensive technology leadership that combines strategic planning with operational oversight. I manage technology budgets, lead technical teams, establish technology governance, and align technical initiatives with business objectives. I act as a bridge between your technical teams and executive leadership while ensuring your company\'s technical vision is executed effectively. ',
      rate: '$150 per hour',
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
