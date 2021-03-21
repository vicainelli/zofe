import Link from 'next/link'
import { FaShoppingCart as ShoppingCart } from 'react-icons/fa'
import { BsFillChatFill as Chat, BsPeopleFill as People } from 'react-icons/bs'

type LinksMenu = {
  isExpanded?: boolean
}

const LG = `lg:flex lg:flex-col lg:justify-end lg:space-y-6 lg:mt-0 lg:h-auto`

export default function LinksMenu({ isExpanded }: LinksMenu) {
  return (
  <ul className={`${LG} grid grid-cols-3 place-items-center transition-all duration-500 ease-in-out ${isExpanded ? 'mt-6 h-32' : 'mt-0 h-0'}`}>
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
    </ul>
  )
}