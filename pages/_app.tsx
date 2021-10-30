import type { AppProps } from 'next/app'
import { ActiveLinkProvider } from '../context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActiveLinkProvider>
      <Component {...pageProps} />
    </ActiveLinkProvider>
  )
}
export default MyApp
