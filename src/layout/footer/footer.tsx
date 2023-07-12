import { FooterProps } from './footer.props';
import styles from './footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        Education © 2023 - {+format(new Date(), 'yyyy') + 1}. All right reserved{' '}
      </div>
      <a href="#">Terms of use</a>
      <a href="#">Privacy policy</a>
    </footer>
  );
};

export default Footer;
