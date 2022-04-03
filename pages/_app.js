import React, { useEffect } from 'react'

import Script from 'next/script'

import '../styles/globals.css'
import "../styles/css/bootstrap.css"

import "bootstrap/dist/js/bootstrap.bundle"
import "popper.js/dist/popper"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require(['../js/bootstrap.min.js', '../js/popper.min.js']) : null
  }, [])
  return (
    <React.Fragment>
      <Script src="https://unpkg.com/@popperjs/core@2" />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp