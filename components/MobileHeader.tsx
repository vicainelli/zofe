import Logo from 'components/Logo'
import Link from 'next/link'

export default function MobileHeader() {
  return (
    <header className="lg:hidden bg-black h-12 pt-1 w-full fixed top-0 grid place-items-center border-zofe border-b-2 bg-opacity-80">
      <Link href="/" aria-label="de volta à Home">
        <a>
          <Logo />
        </a>
      </Link>
    </header>
  )
}