import { CardProps } from './card.props';
import styles from './card.module.css';
import cn from 'classnames';

const Card = ({
  children,
  color = 'primary',
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(styles.card, className, {
        [styles.primary]: color === 'primary',
      })}
    >
      {children}
    </div>
  );
};

export default Card;
