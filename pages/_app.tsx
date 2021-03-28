import type { AppProps } from 'next/app'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import { AudioProvider } from 'lib/audioContext'
import { PlayerProvider } from 'lib/playerContext'
import 'styles/index.css'

const progress = new ProgressBar({
  size: 5,
  color: '#d6b204',
  delay: 100
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <AudioProvider>
        <Component {...pageProps} />
      </AudioProvider>
    </PlayerProvider>
  )
}

export default MyApp
