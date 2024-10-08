import styles from './ProjectModal.module.scss';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector('body');

    if (isOpen) {
      body!.style.overflowY = 'hidden';
    } else {
      body!.style.overflowY = 'scroll';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [setIsOpen]);

  const renderLink = (href: string, icon: JSX.Element, text: string) => {
    if (href === '') {
      return (
        <span className={styles.disabledLink}>
          {icon} {text}
        </span>
      );
    }
    return (
      <Link target="_blank" rel="nofollow" href={href}>
        {icon} {text}
      </Link>
    );
  };

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <Image
          className={styles.modalImage}
          src={imgSrc}
          width={850}
          height={450}
          alt={`An image of the ${title} project.`}
        />
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(' - ')}</div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={styles.links}>
              {renderLink(code, <AiFillGithub />, 'source code')}
              {renderLink(projectLink, <AiOutlineExport />, 'live project')}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById('root'));
};
