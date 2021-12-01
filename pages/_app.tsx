import '../styles/globals.css'
import '../styles/sorry.css'
import '../styles/webflow.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
