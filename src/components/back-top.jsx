import React, { useState, useEffect } from 'react'

import '../libs/easing.js'

// Custom animation function to mimic jQuery's 'easeInOutExpo'
const easeInOutExpo = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

const animateScroll = ({ targetPosition, duration }) => {
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const easedProgress = easeInOutExpo(progress)

    window.scrollTo(0, startPosition + distance * easedProgress)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Handle the scroll event to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset
      if (scrollPosition > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Handle the click event to scroll to the top
  const scrollToTop = () => {
    animateScroll({ targetPosition: 0, duration: 0 })
  }

  return (
    <a
      href="#top"
      onClick={scrollToTop}
      className={`back-to-top animated ${isVisible ? 'fadeIn' : 'fadeOut'}`}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <i className="fa fa-chevron-up"></i>
    </a>
  )
}

export default BackToTop
