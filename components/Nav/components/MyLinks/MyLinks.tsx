import styles from './MyLinks.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://linkedin.com/in/markpsyntax"
          target="_blank"
          rel="nofollow"
        >
          <FaLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://github.com/markpsyntax"
          target="_blank"
          rel="nofollow"
        >
          <FaGithub size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://x.com/markpsyntax" target="_blank" rel="nofollow">
          <BsTwitterX size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};
