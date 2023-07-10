import React from 'react';
import styles from './input.module.css';
import cn from 'classnames';

const Input = ({ className, ...props }): JSX.Element => {
  return <input {...props} className={cn(styles.input, className)} />;
};

export default Input;
