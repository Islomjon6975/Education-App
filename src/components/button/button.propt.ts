import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: 'primary' | 'ghost' | 'failure' | 'success';
  size?: 's' | 'm' | 'l';
  children: ReactNode;
  arrow?: 'right' | 'down' | 'none';
}
