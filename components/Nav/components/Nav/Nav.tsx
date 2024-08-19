import styles from './Nav.module.scss';
import { MyLinks } from '../MyLinks/MyLinks';
import { StyledButton } from '../../../Buttons/StyledButton';
import { motion } from 'framer-motion';

export const Nav = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 5 }}
        transition={{ duration: 0.5 }}
        className={styles.navBar}
      >
        <StyledButton onClick={() => window.open('/resume.pdf')}>
          My resume
        </StyledButton>
      </motion.div>
    </header>
  );
};
