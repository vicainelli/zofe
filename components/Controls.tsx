import { useState } from 'react'
import Link from 'next/link'
import { RiLightbulbFlashFill as LightBulbOn, RiLightbulbLine as LightBulbOff } from 'react-icons/ri'
import { IoMdRadio as Radio } from 'react-icons/io'
import { FaChevronUp as Chevron } from 'react-icons/fa'
import Logo from 'components/Logo'
import PlayerButton from 'components/PlayerButton'

export type ControlsProps = {
  changeTheme: () => void
  toggleLinksMenu: (isExpanded: boolean) => void
  toggleEpisodeBar: () => void
  isLinksMenuExpanded: boolean
}

export default function Controls({ changeTheme, toggleEpisodeBar, toggleLinksMenu, isLinksMenuExpanded = false }: ControlsProps) {
  const theme = process.browser ? localStorage.theme : ''
  const [currentTheme, setCurrentTheme] = useState()

  const switchTheme = () => {
    changeTheme()
    setCurrentTheme(theme)
  }

  return (
    <ul className="grid lg:grid-cols-none lg:auto-rows-max lg:gap-6 lg:w-full place-items-center w-screen grid-cols-4">
        <li className="lg:block hidden">
          <Link href="/">
            <a className="grid place-items-center rounded-full lg:bg-zofe bg-gray-200 w-16 h-16 shine-filter-2xl">
              <Logo color="text-black" />
            </a>
          </Link>
        </li>

        <li className="lg:row-start-3">
          <button onClick={switchTheme} className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16">
            {currentTheme === 'dark' ? (
              <LightBulbOff className="text-3xl" />
              ) : (
              <LightBulbOn className="text-3xl" />
            )}
          </button>
        </li>

        <li className="lg:hidden">
          <button className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16" onClick={toggleEpisodeBar}>
            <Radio className="text-3xl" />
          </button>
        </li>

        <li>
          <PlayerButton />
        </li>

        <li className="lg:hidden">
          <button
            onClick={() => { toggleLinksMenu(!isLinksMenuExpanded) }}
            className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16"
          >
            <Chevron className={`text-3xl transform transition-transform duration-500 ease-in-out ${isLinksMenuExpanded ? 'rotate-180' : 'rotate-0' }`} />
          </button>
        </li>
      </ul>
  )
}