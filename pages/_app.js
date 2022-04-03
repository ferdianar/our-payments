import React, { useEffect } from 'react'

import '../styles/globals.css'
import "../styles/css/bootstrap.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('../js/bootstrap.min.js') : null
  }, [])
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp