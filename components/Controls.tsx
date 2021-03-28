import { useState } from 'react'
import { RiLightbulbFlashFill as LightBulbOn, RiLightbulbLine as LightBulbOff } from 'react-icons/ri'
import { IoMdRadio as Radio } from 'react-icons/io'
import PlayerButton from 'components/PlayerButton'

export type ControlsProps = {
  changeTheme: () => void
  toggleEpisodeBar: () => void
  isExpanded?: boolean
}

export default function Controls({ changeTheme, toggleEpisodeBar, isExpanded }: ControlsProps) {
  const theme = process.browser ? localStorage.theme : ''
  const [currentTheme, setCurrentTheme] = useState()

  const switchTheme = () => {
    changeTheme()
    setCurrentTheme(theme)
  }

  return (
    <ul className={`lg:flex
    lg:flex-col
    lg:justify-end
    lg:space-y-6
    lg:mt-0
    lg:h-auto
    grid
    grid-cols-3
    place-items-center
    transition-all
    duration-500
    ease-in-out
    ${isExpanded ? 'mt-6 h-32' : 'mt-0 h-0'}`}>
     <li className="lg:row-start-3">
        <button
          onClick={switchTheme}
          className="grid
          place-items-center
          lg:bg-zofe
          lg:text-black
          text-zofe
          rounded-full
          w-16
          h-16">
          {currentTheme === 'dark' ? (
            <>
              <LightBulbOff className="text-3xl" />
              <span className="sr-only">Ativar tema escuro</span>
            </>
          ) : (
            <>
              <LightBulbOn className="text-3xl" />
              <span className="sr-only">Ativar tema claro</span>
            </>
          )}
        </button>
      </li>

      <li className="lg:hidden">
        <button className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16" onClick={toggleEpisodeBar}>
          <Radio className="text-3xl" />
          <span className="sr-only">Mostrar/esconder lista de episódios</span>
        </button>
      </li>

      <li>
        <PlayerButton />
      </li>
    </ul>
  )
}
