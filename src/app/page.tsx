'use client'
import { Fragment } from 'react'
// import Image from 'next/image';

import Navbar from './components/navbar'
import Intro from './components/intro'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import BackToTop from './components/back-top'
import Preloader from './components/preloader'
import Experience from './components/experience'

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
  )
}
