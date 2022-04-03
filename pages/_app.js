import React, { useEffect } from 'react'

import '../styles/globals.css'
import "../styles/css/bootstrap.css"

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('../js/bootstrap.min.js') : null
  }, [])
  return <>
    <Head>
      <script src="bootstrap/dist/js/bootstrap.bundle" />
      <script src="../js/vip/popper.min.js" />
      <script src="../js/bootstrap.min.js" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp