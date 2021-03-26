import * as React from 'react';
import '../../styles.scss';
import Header from '../header/header';
import Footer from '../footer/footer';

// markup
const Template = ({ home, title, subtitle, children }) => {
  return (
    <>
      <Header home={home} title={title} subtitle={subtitle} />
      {children}
      <Footer />
    </>
  );
};

export default Template;
