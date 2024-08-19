import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './BottomBar.module.scss';
import { BsPerson } from 'react-icons/bs';
import { BiPaperPlane } from 'react-icons/bi';
import { FiBriefcase } from 'react-icons/fi';
import { DiCodeBadge } from 'react-icons/di';

export const BottomBar = () => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');

    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 60; // Adjust this value to match the height of your nav bar
      const position = section.offsetTop - navHeight;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
      setSelected(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.bottomNav}
    >
      <motion.a
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={() => {
          scrollToSection('about');
        }}
        className={selected === 'about' ? styles.selected : ''}
      >
        <BsPerson className={styles.navIcon} />
        <p className={styles.navName}>About</p>
      </motion.a>
      <motion.a
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={() => scrollToSection('projects')}
        className={selected === 'projects' ? styles.selected : ''}
      >
        <DiCodeBadge className={styles.navIcon} />
        <p className={styles.navName}>Projects</p>
      </motion.a>
      <motion.a
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={() => scrollToSection('experience')}
        className={selected === 'experience' ? styles.selected : ''}
      >
        <FiBriefcase className={styles.navIcon} />
        <p className={styles.navName}>Exp.</p>
      </motion.a>
      <motion.a
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={() => scrollToSection('contact')}
        className={selected === 'contact' ? styles.selected : ''}
      >
        <BiPaperPlane className={styles.navIcon} />
        <p className={styles.navName}>Contact</p>
      </motion.a>
    </motion.nav>
  );
};
