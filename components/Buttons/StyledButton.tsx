import { MouseEventHandler, ReactNode } from 'react';
import styles from './StyledButton.module.scss';

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const StyledButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.styledButton}>
      {children}
    </button>
  );
};
