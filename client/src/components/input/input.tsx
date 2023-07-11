import React from 'react';
import styles from './input.module.css';
import cn from 'classnames';
import { InputProps } from './input.props';

const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input {...props} className={cn(styles.input, className)} />;
};

export default Input;
