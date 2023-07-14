import cn from 'classnames';

import { DividerProps } from './divider.props';
import styles from './divider.module.css';

const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return <hr className={cn(className, styles.divider)} {...props} />;
};

export default Divider;
