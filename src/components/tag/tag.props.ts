import { ReactNode } from 'react';

export interface TagPropgs {
  size?: 's' | 'm';
  color?: 'red' | 'green' | 'primary';
  children: ReactNode;
}
