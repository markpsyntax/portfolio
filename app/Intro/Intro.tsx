import { Reveal } from '@/components/utils/Reveal';
import styles from './Intro.module.scss';
import { StyledButton } from '@/components/Buttons/StyledButton';
import { DotGrid } from './DotGrid';
import IntroImage from './IntroImage';

export const Intro = () => {
  return (
    <section className={`section-wrapper ${styles.intro}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hello, I&apos;m Mark<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <div className={styles.typing}>
            <h2 className={styles.subTitle}>
              <span>Software Engineer</span>
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <span>
            <p className={styles.aboutCopy}>
              Passionate developer and problem solver.
            </p>
            <p className={styles.connect}>Let&apos;s connect!</p>
            <br />
          </span>
        </Reveal>
        <Reveal>
          <StyledButton
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Contact me&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.contactSVG}
              fill="none"
              viewBox="0 0 22 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </StyledButton>
        </Reveal>
        <IntroImage />
      </div>
    </section>
  );
};
