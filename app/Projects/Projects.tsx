import { SectionHeader } from '@/components/utils/SectionHeader';
import { Project } from './Project';
import styles from './Projects.module.scss';
import { m } from 'framer-motion';

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: 'Jxnyr',
    imgSrc: '/jxnyrSite.png',
    code: 'https://github.com/markpsyntax/JXNYR',
    projectLink: '',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Sass',
      'PostgreSQL',
      'Framer Motion',
      'Stripe',
    ],
    description: 'COMING SOON - Official E-commerce site for my music project.',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: Coming Soon
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: Coming Soon
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: Coming Soon
        </p>
      </>
    ),
  },
  {
    title: 'Merchbox',
    imgSrc: '/merchbox.png',
    code: '',
    projectLink: '',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Sass',
      'Resend',
      'Framer Motion',
      'Google Captcha',
    ],
    description: 'COMING SOON - Landing site for Merch page.',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: Coming Soon
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: Coming Soon
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: Coming Soon
        </p>
      </>
    ),
  },
  {
    title: 'Commercial EVs',
    imgSrc: '/commercialevs.webp',
    code: '',
    projectLink: 'https://www.commercialevs.com/',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'React Bootstrap',
      'Node',
      'Nest.js',
      'Sass',
      'Jira',
    ],
    description: 'Landing site for CEVs',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: The client required
          a landing page for their electric vehicle store that would enhance
          their online presence. The primary objective was to create a visually
          appealing, user-friendly website that could be easily navigated and
          regularly updated with new and used inventory.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: To improve the user
          experience, I implemented a modern, responsive design. Collaborating
          closely with design teams, we minimized clutter and ensured visual
          appeal. Additionally, I led the main development team in integrating
          new features and design updates to maintain a fresh and engaging site.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The resulting website
          is both modern and user-friendly, offering a seamless navigation
          experience. It integrates smoothly with the existing CMS, allowing for
          consistent updates and a uniform user experience across all devices.
        </p>
      </>
    ),
  },
  {
    title: 'Shaed.ai',
    imgSrc: '/shaed.ai.png',
    code: '',
    projectLink: 'https://shaed.ai',
    tech: [
      'React',
      'TypeScript',
      'Redux',
      'Material UI',
      'Kontent.ai',
      'Python',
      'Node.js',
      'Nest.js',
      'Sass',
      'PostgreSQL',
      'GCP',
      'Jira',
      'Clickup',
    ],
    description: 'Suite of React applications.',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: The client needed a
          professional and engaging landing site to describe their business and
          provide potential clients with easy access to contact information for
          inquiries about orders.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: I developed a
          responsive and aesthetically pleasing site using Next.js, ensuring
          fast load times and smooth user experience. The site includes detailed
          sections about the business, services offered, and an intuitive
          contact form for client inquiries, with added security through Google
          Captcha.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The final site
          effectively communicates the client&apos;s business offerings and
          facilitates easy client engagement through the contact form, leading
          to increased client inquiries and better overall online presence.
        </p>
      </>
    ),
  },
  {
    title: 'Phillstack',
    imgSrc: '/psSiteImg.webp',
    code: 'https://github.com/Phillstack/phillstack-react',
    projectLink: 'https://phillstack.com/',
    tech: [
      'React',
      'Sass',
      'Bootstrap',
      'JavaScript',
      'Node.js',
      'Express',
      'AWS',
      'CircleCI',
      'Jira',
    ],
    description: 'Phillstack: Simplified Client Solutions',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: Our goal was to
          create an inviting digital landing space for our freelance services,
          one that would not only highlight our past projects but also be
          accessible to non-technical visitors, ensuring they understand our
          services and can easily reach out to us.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: We crafted a
          straightforward and intuitive design, prioritizing ease of navigation
          and clarity of information. The interface is clean and minimalistic,
          removing any barriers between our work and potential clients.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The resulting site is
          the epitome of user-friendly design, boasting high responsiveness and
          usability. With CircleCI integration, we ensure continuous testing for
          seamless performance. The development process followed agile
          principles for efficiency and adaptability. Deployment via Amazon Web
          Services guarantees reliability and scalability, while a simple
          contact form facilitates effortless communication.
        </p>
      </>
    ),
  },
  {
    title: 'Boombox Cartel',
    imgSrc: '/bmbxCtrlSiteImg.webp',
    code: '',
    projectLink: 'http://boomboxcartel.com',
    tech: ['Angular', 'Sass', 'Bootstrap', 'HTML', 'CSS'],
    description: 'The official website for Boombox Cartel',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: Tasked with
          revitalizing Boombox Cartel&apos;s online presence, the objective was
          to create a fresh, engaging web experience that resonates with fans.
          The site needed to showcase the artist&apos;s creativity and talent
          through a modern, multimedia-rich interface without compromising on
          performance.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: Collaborating
          closely with the artist and their graphic designer, we orchestrated a
          full-scale site redesign. The new platform is a testament to their
          vision, featuring custom graphics with unique placements, custom
          icons, and fonts. A bespoke sliding drawer for social media links and
          email subscriptions enhances engagement, while streamlined access to
          tour dates and the store caters to fan needs.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The reinvented
          website transformed from dormant to dynamic, attracting over 10,000
          users immediately post-launch. By translating the artist&apos;s
          conceptual art into a high-performance web application using Angular,
          and crafting a stylish interface with Bootstrap and Sass, the site now
          stands as a vibrant hub for fan interaction and artist promotion.
        </p>
      </>
    ),
  },
  {
    title: 'Shop J&W',
    imgSrc: '/shopJWSiteImg.webp',
    code: '',
    projectLink: 'https://shopjandw.com',
    tech: ['Big Commerce', 'Wordpress'],
    description: 'WordPress to BigCommerce Migration',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: Our client faced a
          malfunctioning WordPress site, plagued by outdated plugins and a
          disjointed product hosting setup with BigCommerce. The task was to
          streamline their online presence and ensure seamless data integration.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: We executed a
          strategic migration, transitioning the entire storefront from
          WordPress to BigCommerce. This move was complemented by the
          implementation of a custom theme tailored to the client&apos;s brand,
          enhancing the front-end experience.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The website&apos;s
          redesign and platform migration have markedly enhanced user experience
          and site stability, with a 50% improvement in performance metrics.
        </p>
      </>
    ),
  },
  {
    title: 'Old Portfolio',
    imgSrc: '/oldportfolio.png',
    code: 'https://github.com/markpsyntax/oldportfolio',
    projectLink: 'https://mpoldportfolio.vercel.app/',
    tech: [
      'Next.js',
      'Tailwindcss',
      'JavaScript',
      'GraphQL',
      'GraphCMS',
      'Lottie',
      'Nodemailer',
    ],
    description: 'My original portfolio and Blog',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: The goal was to
          create a personal portfolio that not only displayed my software
          development projects but also included a blog to share my insights and
          experiences in the tech world.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: Embracing the power
          of Next.js for the first time, I integrated GraphCMS, a headless CMS,
          to manage blog content efficiently. The data is fetched using GraphQL,
          ensuring a seamless flow of information.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The result is a fully
          responsive web application that provides a quick, lightweight, and
          user-friendly experience. It serves as a comprehensive showcase of my
          work and a platform for my written thoughts in the blog.
        </p>
      </>
    ),
  },
];
