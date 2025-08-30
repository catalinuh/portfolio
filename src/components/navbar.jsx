import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [color, setColor] = useState('#ffffff')
  const [isScrolled, setIsScrolled] = useState(false)
  const mainNavRef = useRef(null)

  useEffect(() => {
    // Handle the scroll event
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset
      const isPastThreshold = scrollPosition > 50

      setIsScrolled(isPastThreshold)
      setColor(isPastThreshold ? '#000000' : '#ffffff')
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Empty dependency array ensures this effect runs once on mount

  // Add a separate effect for smooth scrolling
  useEffect(() => {
    const mainNav = mainNavRef.current
    if (!mainNav) return

    const handleScrollLinkClick = (e) => {
      // Logic for smooth scrolling
      const targetId = e.target.hash
      const isAnchorLink = e.target.classList.contains('js-scroll') && targetId

      if (isAnchorLink) {
        e.preventDefault()
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const navHeight = mainNav.offsetHeight
          window.scrollTo({
            top: targetElement.offsetTop - navHeight + 5,
            behavior: 'smooth',
          })

          // Collapse the navbar after clicking a link
          const navbarCollapse = document.getElementById('navbarDefault')
          if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const collapseElement = window.bootstrap
              ? new window.bootstrap.Collapse(navbarCollapse)
              : null
            if (collapseElement) {
              collapseElement.hide()
            }
          }
        }
      }
    }

    const handleNavbarCollapse = () => {
      // Toggle the navbar collapse
      const navbarCollapse = document.getElementById('navbarDefault')
      if (navbarCollapse) {
        navbarCollapse.classList.toggle('show')
      }
    }

    const navLinks = mainNav.querySelectorAll('a.js-scroll')
    const navToggler = mainNav.querySelector('.navbar-toggler')

    // Add click listeners to smooth scroll links
    navLinks.forEach((link) => {
      link.addEventListener('click', handleScrollLinkClick)
    })

    // Handle toggler click
    if (navToggler) {
      navToggler.addEventListener('click', handleNavbarCollapse)
    }

    return () => {
      // Cleanup: remove all event listeners
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleScrollLinkClick)
      })
      if (navToggler) {
        navToggler.removeEventListener('click', handleNavbarCollapse)
      }
    }
  }, [])

  return (
    <nav
      ref={mainNavRef}
      className={`navbar navbar-b navbar-expand-md fixed-top ${
        isScrolled ? 'navbar-reduce' : 'navbar-trans'
      }`}
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#top">
          <h1 id="navbar-name" style={{ color }}>
            Catalina McQuade
          </h1>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse" // Use Bootstrap 5 attributes
          data-bs-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
