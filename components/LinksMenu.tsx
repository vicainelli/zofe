import Link from 'next/link'
import { FaChevronUp as Chevron, FaShoppingCart as ShoppingCart } from 'react-icons/fa'
import { BsFillChatFill as Chat, BsPeopleFill as People } from 'react-icons/bs'
import Logo from 'components/Logo'

type LinksMenu = {
  isExpanded?: boolean
  toggleLinksMenu: (isExpanded: boolean) => void
  isLinksMenuExpanded: boolean
}

export default function LinksMenu({ isExpanded, toggleLinksMenu, isLinksMenuExpanded = false }: LinksMenu) {
  return (
    <ul className={`lg:flex
      lg:flex-col
      lg:justify-start
      lg:space-y-6
      lg:mt-0
      lg:h-auto
      grid
      grid-cols-4
      justify-end
      place-items-center
      ease-in-out`}>
      <li className="lg:block hidden">
        <Link href="/">
          <a className="grid
            place-items-center
            rounded-full
            w-16
            h-16">
            <Logo />
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
        <button
          onClick={() => { toggleLinksMenu(!isLinksMenuExpanded) }}
          className="grid place-items-center lg:bg-zofe lg:text-black text-zofe rounded-full w-16 h-16"
        >
          <Chevron className={`text-3xl transform transition-transform duration-500 ease-in-out ${isLinksMenuExpanded ? 'rotate-180' : 'rotate-0'}`} />
          <span className="sr-only">{isLinksMenuExpanded ? 'Close' : 'Open'} controles do site</span>
        </button>
      </li>
  </ul>
  )
}