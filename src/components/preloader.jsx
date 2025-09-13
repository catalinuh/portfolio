import React, { useState, useEffect } from 'react'

import '../css/preloader.scss'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // A function to handle the window load event
    const handleLoad = () => {
      // Start the fade-out animation after a delay
      const fadeTimer = setTimeout(() => {
        setIsFading(true)
      }, 100)

      // Once the animation is complete, unmount the component
      const hideTimer = setTimeout(() => {
        setIsLoading(false)
      }, 700) // 100ms delay + 600ms transition

      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(hideTimer)
      }
    }

    // Add the event listener for the window load event
    window.addEventListener('load', handleLoad)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, []) // The empty array ensures this effect runs only once on mount.

  if (!isLoading) {
    return null // Don't render anything if loading is complete
  }

  return <div id="preloader" className={isFading ? 'fade-out' : ''}></div>
}

export default Preloader
