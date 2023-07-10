import { ButtonProps } from './button.propt';
import styles from './button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

const Button = ({
  appearance,
  arrow = 'none',
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}

      {arrow != 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
