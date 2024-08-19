import { MyLinks } from '@/components/Nav/components/MyLinks/MyLinks';
import { Reveal } from '@/components/utils/Reveal';
import { SectionHeader } from '@/components/utils/SectionHeader';
import styles from './About.module.scss';
import { Stats } from './Stats';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello! I&apos;m Mark, a Minneapolis-based software engineer with a
              rhythm for coding and a melody for innovation. Transitioning from
              music production to tech, I craft dynamic user experiences with
              React, Next.js, and TypeScript, always selecting the perfect tool
              for the task at hand.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              As a freelance developer, I&apos;m honing my skills and am on the
              path to obtaining the AWS Developer Associate certification, eager
              to architect scalable solutions in the cloud.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, you&apos;ll find me on the slopes
              carving fresh snow or in the studio laying down tracks for my next
              music venture.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m on the lookout for new opportunities that will challenge
              me and broaden my horizons in cutting-edge technology. If
              you&apos;re in need of a developer with a creative edge,
              let&apos;s tune into the possibilities together. Let&apos;s
              connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
