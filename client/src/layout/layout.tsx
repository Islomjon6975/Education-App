import React, { FunctionComponent } from 'react';
import { LayoutProps } from './layout.props';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    console.log(props, 'props');

    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
