import { CardProps } from './card.props';
import styles from './card.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

const Card = forwardRef(
  (
    { children, color = 'primary', className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(styles.card, className, {
          [styles.primary]: color === 'primary',
        })}
      >
        {children}
      </div>
    );
  }
);

export default Card;
