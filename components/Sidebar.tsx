import { useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart as ShoppingCart } from 'react-icons/fa'
import { RiLightbulbFlashFill as LightBulbOn, RiLightbulbLine as LightBulbOff } from 'react-icons/ri'
import { BsFillChatFill as Chat, BsPeopleFill as People, BsThreeDotsVertical as Dots } from 'react-icons/bs'
import { IoMdRadio as Radio } from 'react-icons/io'
import Logo from 'components/Logo'
import PlayerButton from 'components/PlayerButton'

type SideBarProps = {
  onChange: () => void
  toggleEpisodeBar: () => void
}

const Sidebar = ({ onChange, toggleEpisodeBar }: SideBarProps) => {
  const [currentTheme, setCurrentTheme] = useState()
  const theme = process.browser ? localStorage.theme : ''

  const switchTheme = () => {
    onChange()
    setCurrentTheme(theme)
  }

  return (
    <header className="lg:grid lg:liquid-gap lg:w-24 lg:pt-6 py-3 lg:p-3 lg:h-screen w-full lg:static fixed bottom-0 bg-gray-200 dark:bg-gray-700 z-20">
      <ul className="grid lg:grid-cols-none lg:auto-rows-max lg:gap-6 lg:w-full place-items-center w-screen grid-cols-6">
        <li>
          <Link href="/">
            <a className="grid place-items-center rounded-full lg:bg-zofe bg-gray-200 w-16 h-16 shine-filter-2xl">
              <Logo color="text-black" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16">
              <People className="text-3xl" />
            </a>
          </Link>
        </li>
        <li className="lg:hidden">
          <button className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16" onClick={toggleEpisodeBar}>
            <Radio className="text-3xl" />
          </button>
        </li>
        <li>
          <Link href="/vista">
            <a className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16">
              <ShoppingCart className="text-3xl" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <a className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16">
              <Chat className="text-3xl" />
            </a>
          </Link>
        </li>
        <li className="lg:hidden">
          <button className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16">
            <Dots className="text-3xl" />
          </button>
        </li>
      </ul>

      <div className="flex-col justify-end space-y-6 lg:flex hidden">
        <PlayerButton />
        <button onClick={switchTheme} className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16">
          {currentTheme === 'dark' ? (
            <LightBulbOff className="text-3xl" />
            ) : (
            <LightBulbOn className="text-3xl" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Sidebar
