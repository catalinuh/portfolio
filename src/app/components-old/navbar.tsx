import React, { useEffect, useState } from 'react'
// import $ from 'jquery'

export default function Navbar() {
  const [color, setColor] = useState('#ffffff')

  useEffect(() => {
    // const nav = $('nav')
    // let navHeight = nav.outerHeight()

    // $('body').scrollspy({
    //   target: '#mainNav',
    //   offset: navHeight,
    // })

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        document
          ?.querySelector('.navbar-expand-md')
          ?.classList.add('navbar-reduce')
        document
          ?.querySelector('.navbar-expand-md')
          ?.classList.remove('navbar-trans')
        setColor('#000000')
      } else {
        document
          ?.querySelector('.navbar-expand-md')
          ?.classList.add('navbar-trans')
        document
          ?.querySelector('.navbar-expand-md')
          ?.classList.remove('navbar-reduce')
        setColor('#ffffff')
      }
    })

    // $('a.js-scroll[href*="#"]:not([href="#"])').on('click', function () {
    //   if (
    //     window.location.pathname.replace(/^\//, '') ===
    //       this.pathname.replace(/^\//, '') &&
    //     window.location.hostname === this.hostname
    //   ) {
    //     var target = $(this.hash)
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
    //     if (target.length) {
    //       $('html, body').animate(
    //         {
    //           scrollTop: target.offset().top - navHeight + 5,
    //         },
    //         1000,
    //         'easeInExpo'
    //       )
    //       return false
    //     }
    //   }
    // })
  }, [])

  const handleToggleNavbar = () => {
    // if (!$('#mainNav').hasClass('navbar-reduce')) {
    // $('#mainNav').addClass('navbar-reduce')
    // }
  }

  const handleClickNavLink = () => {
    // $('.navbar-collapse').collapse('hide')
  }

  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a
          className="navbar-brand js-scroll"
          href="#page-top"
          onClick={handleClickNavLink}
        >
          <h1 id="navbar-name" style={{ color: `${color}` }}>
            Catalina McQuade
          </h1>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNavbar}
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
              <a
                className="nav-link js-scroll active"
                href="#home"
                onClick={handleClickNavLink}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#about"
                onClick={handleClickNavLink}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#experience"
                onClick={handleClickNavLink}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#work"
                onClick={handleClickNavLink}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#contact"
                onClick={handleClickNavLink}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
