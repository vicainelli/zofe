import { ReactNode, useState } from 'react'
import { createContext, useContext, useRef } from 'react'
import SuperPlayer from 'components/Player'

const DEFAULT_TRACK = {
  title: '',
  url: ''
}

const DEFAULT_CONTEXT = {
  currentTrackUrl: '',
  currentTrackTitle: '',
  setTrack: ({ title, url }: typeof DEFAULT_TRACK) => {},
  skipTrack: (param: number) => {}
}

type AudioProviderProps = {
  children?: ReactNode
  initialTrack?: typeof DEFAULT_TRACK
}

const AudioContext = createContext<typeof DEFAULT_CONTEXT>(DEFAULT_CONTEXT)

export const AudioProvider = ({ children, initialTrack }: AudioProviderProps) => {
  const [track, setTrack] = useState(initialTrack || DEFAULT_TRACK)
  const ref = useRef<HTMLAudioElement | null>(null)

  const skipTrack = (timeInSeconds: number) => {
    if (ref.current === null) return
    const { current: player } = ref

    player.currentTime = timeInSeconds
  }

  return (
    <AudioContext.Provider value={{
      currentTrackTitle: track.title,
      currentTrackUrl: track.url,
      setTrack,
      skipTrack
    }}>
      <SuperPlayer title={track.title} url={track.url} ref={ref} />
      {children}
    </AudioContext.Provider>
  )
}

export function useAudioContext() {
  return useContext(AudioContext)
}