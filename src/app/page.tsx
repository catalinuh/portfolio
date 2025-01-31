'use client'
// @refresh reset
import { Fragment } from 'react'
import Navbar from './components-old/navbar'
import About from './components-old/about'
import BackToTop from './components-old/back-top'
import Contact from './components-old/contact'
import Experience from './components-old/experience'
import Intro from './components-old/intro'
import Portfolio from './components-old/portfolio'
import Preloader from './components-old/preloader'

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
