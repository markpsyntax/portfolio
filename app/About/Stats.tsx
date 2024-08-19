import styles from './Stats.module.scss';
import { AiFillCode, AiFillSmile } from 'react-icons/ai';
import { Reveal } from '@/components/utils/Reveal';

const knownTech = [
  'Next',
  'React.js',
  'TypeScript',
  'JavaScript',
  'SQL',
  'SASS',
  'Node.js',
  'Python',
  'Amazon Web Services (AWS)',
  'GraphQL',
  'Cypress',
  'Jest',
  'Docker',
  'Redux',
  'Docker',
  'JSON',
  'MongoDB',
  'Postman',
  'Github',
  'Datadog',
  'Google Analytics',
];

const learningTech = ['React Native'];

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Tech I Know</span>
          </h4>
          <div className={styles.statGrid}>
            {knownTech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Tech I&apos;m Learning</span>
          </h4>
          <div className={styles.statGrid}>
            {learningTech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};