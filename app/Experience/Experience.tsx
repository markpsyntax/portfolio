import { SectionHeader } from '@/components/utils/SectionHeader';
import { ExperienceItem } from './ExperienceItem';

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: 'Ledelsea',
    position: 'Lead Software Engineer',
    time: 'December 2023 - Current',
    location: 'Hybrid - Minneapolis, MN',
    description:
      "As a contractor at Ladelsea, I've led development efforts within an AI-driven, data-centric SaaS environment, delivering end-to-end solutions from architecture to execution.",
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Redux',
      'Sass',
      'Material UI',
      'React Bootstrap',
      'Kontent.ai',
      'Python',
      'Docker',
      'Click Up',
      'Jira',
      'Node.js',
      'Nest.js',
      'GCP',
      'Google Analytics',
      'Google Tag Manager',
      'Jest',
      'React Testing Library',
      'Git',
      'RESTful Web Services',
    ],
  },
  {
    title: 'Mastery Logistics Systems',
    position: 'Software Engineer',
    time: 'March 2022 – June 2023',
    location: 'Remote',
    description:
      'As a Software Engineer at Mastery, I honed my skills in building high-performance, scalable applications tailored for the logistics industry. My role involved close collaboration with UI/UX and product teams to meet tight deadlines, ensuring code quality through meticulous reviews and testing with tools like Jest and Cypress.',
    tech: [
      'React',
      'TypeScript',
      'GraphQL',
      'Jest',
      'Cypress',
      'Azure',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'PhillStack',
    position: 'Software Engineer',
    time: 'June 2017 – May 2022',
    location: 'Remote',
    description:
      "During my tenure as a Software Engineer at PhillStack, I crafted cutting-edge web applications from the ground up, enhancing user experiences with React, Angular, and TypeScript. My direct engagement with clients and active role in marketing our services were pivotal in driving the company's growth and reducing time-to-market.",
    tech: [
      'Next.js',
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Git',
      'Node.js',
      'Express',
      'AWS',
      'Google Analytics',
      'RESTful Web Services',
    ],
  },
];
