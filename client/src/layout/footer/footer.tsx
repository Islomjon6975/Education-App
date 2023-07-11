import React from 'react';
import { FooterProps } from './footer.props';

const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <footer {...props}>Footer</footer>;
};

export default Footer;
