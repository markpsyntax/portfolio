'use client';

import React from 'react';
import { SideBar } from '../components/Nav/components/SideBar/SideBar';
import { Intro } from './Intro/Intro';
import { Nav } from '../components/Nav/components/Nav/Nav';
import { About } from './About/About';
import { Projects } from './Projects/Projects';
import { Experience } from './Experience/Experience';
import { Contact } from './Contact/Contact';
import { BottomBar } from '../components/Nav/components/BottomBar/BottomBar';
import styles from './page.module.scss';

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Nav />
          <Intro />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <div className={styles.pageSpace} />
          <BottomBar />
        </main>
      </div>
    </>
  );
};

export default Home;
