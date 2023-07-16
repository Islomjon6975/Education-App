import cn from 'classnames';

import { IconButtonProps, icons } from './icon-button.props';
import styles from './icon-button.module.css';

const IconButton = ({
  appearance,
  icon,
  className,
  ...props
}: IconButtonProps): JSX.Element => {
  const IconComponent = icons[icon];

  return (
    <button
      className={cn(styles.iconButton, {
        [styles.primary]: appearance === 'primary',
        [styles.white]: appearance === 'white',
      })}
      {...props}
    >
      <IconComponent />
    </button>
  );
};

export default IconButton;
