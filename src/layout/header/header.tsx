import cn from 'classnames';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { HeaderProps } from './header.props';
import { IconButton } from '../../components';
import styles from './header.module.css';
import LogoIcon from '../logo.svg';
import Sidebar from '../sidebar/sidebar';
import Link from 'next/link';

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  return (
    <div className={cn(className, styles.header)} {...props}>
      <Link href="/">
        <LogoIcon />
      </Link>
      <IconButton icon="menu" appearance="white" onClick={toggleMenu} />
      <motion.div
        variants={variants}
        initial={'closed'}
        animate={isOpen ? 'opened' : 'closed'}
        className={styles.mobileMenu}
      >
        <Sidebar />
        <IconButton
          className={styles.closeIcon}
          onClick={toggleMenu}
          icon={'close'}
          appearance={'white'}
        />
      </motion.div>
    </div>
  );
};

export default Header;
