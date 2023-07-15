import cn from 'classnames';

import { SearchProps } from './search.props';
import styles from './search.module.css';
import Input from '../input/input';
import Button from '../button/button';
import SearchIcon from './search.svg';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const searchHandler = () => {
    if (!search) {
      return;
    }
    router.push({ pathname: '/search', query: { q: search } });
  };

  const onKeyDetact = (e) => {
    if (e.key === 'Enter' && e.type === 'keydown') {
      searchHandler();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        placeholder="Search..."
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={onKeyDetact}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={searchHandler}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
