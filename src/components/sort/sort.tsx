import cn from 'classnames';

import { SortEnum, SortProps } from './sort.props';
import styles from './sort.module.css';
import SortIcon from './sort.svg';

const Sort = ({
  sort = SortEnum.Rating,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sort)}>
      <span
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIcon className={styles.sortIcon} /> Rating
      </span>
      <span
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
      >
        <SortIcon className={styles.sortIcon} /> Price
      </span>
    </div>
  );
};

export default Sort;
