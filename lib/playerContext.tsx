import { ReactNode, useState } from 'react'
import { createContext, useContext } from 'react'

const DEFAULT_CONTEXT = {
  isOpen: false,
  toggleOpen: (isOpen: boolean) => {}
}

type PlayerProviderProps = {
  children: ReactNode
}

const PlayerContext = createContext<typeof DEFAULT_CONTEXT>(DEFAULT_CONTEXT)

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [isOpen, toggleOpen] = useState(false)

  return (
    <PlayerContext.Provider value={{
      toggleOpen,
      isOpen
    }}>
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayerContext() {
  return useContext(PlayerContext)
}