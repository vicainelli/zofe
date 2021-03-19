import type { AppProps } from 'next/app'
import { AudioProvider } from 'lib/audioContext'
import { PlayerProvider } from 'lib/playerContext'
import 'styles/index.css'

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
