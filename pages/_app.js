import React, { useEffect } from 'react'

import '../styles/globals.css'
import "../styles/css/bootstrap.css"

import "bootstrap/dist/js/bootstrap.bundle"
import "popper.js/dist/popper"

import "../js/vip/popper.min.js"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require(['../js/bootstrap.min.js', '../js/popper.min.js']) : null
  }, [])
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp