import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function Preloader() {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader')
          .delay(100)
          .fadeOut('slow', function () {
            $(this).remove()
          })
      }
    })
  }, [])

  return <>
    {showLoader && <div id="preloader"></div>}
  </>
}
