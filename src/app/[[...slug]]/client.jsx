'use client'

import React from 'react'

import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../../components/navbar.jsx'), {
  ssr: false,
})
const Intro = dynamic(() => import('../../components/intro.jsx'), {
  ssr: false,
})
const About = dynamic(() => import('../../components/about.jsx'), {
  ssr: false,
})
const Experience = dynamic(() => import('../../components/experience.jsx'), {
  ssr: false,
})
const Portfolio = dynamic(() => import('../../components/portfolio.jsx'), {
  ssr: false,
})
const Contact = dynamic(() => import('../../components/contact.jsx'), {
  ssr: false,
})
const BackToTop = dynamic(() => import('../../components/back-top.jsx'), {
  ssr: false,
})
const Preloader = dynamic(() => import('../../components/preloader.jsx'), {
  ssr: false,
})

export function ClientOnly() {
  return (
    <React.Fragment>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <BackToTop />
      <Preloader />
    </React.Fragment>
  )
}
