import React, { useEffect, useState } from 'react'

import './styles/back-top.scss'

export default function BackToTop() {
  const [className, setClassName] = useState<string>('');

  useEffect(() => {
    if (window?.scrollY > 100) {
      setClassName('fadeIn')
    } else {
      setClassName('fadeOut')
    }
  }, [window?.scrollY])

  const handleClickBackToTop = () => {
    window?.scrollTo(0, 0)
  }

  return (
    <a href="#" className={`back-to-top animated ${className}`} onClick={handleClickBackToTop}>
      <i className="fa fa-chevron-up"></i>
    </a>
  )
}
