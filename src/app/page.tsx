import { Fragment } from 'react';
// import Image from 'next/image';

import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';
import Experience from './components/experience';

// import styles from './page.module.css';

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <BackToTop />
      <Preloader />
    </Fragment>
  );
}
