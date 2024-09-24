import React, { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import './styles/back-top.scss'

export default function BackToTop() {
  const [className, setClassName] = useState<string>('');
  const [scrollTop, setScrollTop] = useState(0);

  library.add(faChevronUp)

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.scrollY;
      if (currentPosition >= 100) {
        setClassName('fadeIn')
      } else {
        setClassName('fadeOut')
      }

      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const handleClickBackToTop = useCallback(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickBackToTop);
    return () => {
      window.removeEventListener("click", handleClickBackToTop);
    };
  }, [handleClickBackToTop]);

  return (
    <a href="#" className={`back-to-top animated ${className}`} onClick={handleClickBackToTop}>
      <FontAwesomeIcon icon="chevron-up" />
    </a>
  )
}
