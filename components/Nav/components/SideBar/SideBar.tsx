import { useEffect, useState } from 'react';
import styles from './SideBar.module.scss';
import { motion } from 'framer-motion';

export const SideBar = () => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setSelected(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >
      <span className={styles.logo}>
        M<span>.</span>
      </span>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={() => {
          scrollToSection('about');
        }}
        className={selected === 'about' ? styles.selected : ''}
      >
        About
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={() => scrollToSection('projects')}
        className={selected === 'projects' ? styles.selected : ''}
      >
        Projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={() => scrollToSection('experience')}
        className={selected === 'experience' ? styles.selected : ''}
      >
        Exp.
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={() => scrollToSection('contact')}
        className={selected === 'contact' ? styles.selected : ''}
      >
        Contact
      </motion.a>
    </motion.nav>
  );
};
