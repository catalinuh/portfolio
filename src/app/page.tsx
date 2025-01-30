'use client'
// @refresh reset
import { Fragment } from 'react'
import Navbar from './components/navbar'
import About from './components/about'
import BackToTop from './components/back-top'
import Contact from './components/contact'
import Experience from './components/experience'
import Intro from './components/intro'
import Portfolio from './components/portfolio'
import Preloader from './components/preloader'

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
