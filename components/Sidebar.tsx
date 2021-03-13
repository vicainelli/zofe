import { useState } from 'react'
import Link from 'next/link'
import Logo from 'components/Logo'
import { FaShoppingCart as ShoppingCart, FaMicrophone as Mic } from 'react-icons/fa'
import { RiLightbulbFlashFill as LightBulbOn, RiLightbulbLine as LightBulbOff } from 'react-icons/ri'
import { BsFillChatFill as Chat, BsPeopleFill as People } from 'react-icons/bs'

type SideBarProps = {
  onChange: () => void
}

const Sidebar = ({ onChange }: SideBarProps) => {
  const [currentTheme, setCurrentTheme] = useState()
  const theme = process.browser ? localStorage.theme : ''

  const switchTheme = () => {
    onChange()
    setCurrentTheme(theme)
  }

  return (
    <div className="grid liquid-gap w-24 pt-6 p-3 h-screen bg-gray-200 dark:bg-gray-700">
      <div className="grid auto-rows-max gap-6 items-center">
        <Link href="/">
          <a className="grid place-items-center rounded-full bg-zofe w-16 h-16 shine-filter-2xl">
            <Logo color="text-black" />
          </a>
        </Link>

        <Link href="/sobre">
          <a className="grid place-items-center bg-zofe rounded-full w-16 h-16">
            <People className="text-3xl" />
          </a>
        </Link>

        <Link href="/vista">
          <a className="grid place-items-center bg-zofe rounded-full w-16 h-16">
            <ShoppingCart className="text-3xl" />
          </a>
        </Link>

        <Link href="/contato">
          <a className="grid place-items-center bg-zofe rounded-full w-16 h-16">
            <Chat className="text-3xl" />
          </a>
        </Link>
      </div>

      <div className="flex flex-col justify-end space-y-6">
        <button onClick={switchTheme} className="grid place-items-center bg-zofe rounded-full w-16 h-16">
          {currentTheme === 'dark' ? (
            <LightBulbOff className="text-3xl" />
            ) : (
            <LightBulbOn className="text-3xl" />
          )}
        </button>
        <Link href="/">
          <a className="grid place-items-center bg-zofe rounded-full w-16 h-16">
            <Mic className="text-3xl" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
