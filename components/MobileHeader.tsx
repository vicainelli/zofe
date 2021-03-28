import Logo from 'components/Logo'
import Link from 'next/link'

export default function MobileHeader() {
  return (
    <header className="lg:hidden bg-black h-12 pt-1 w-full fixed top-0 grid place-items-center border-zofe border-b-2 z-50">
      <Link href="/">
        <a>
          <Logo />
          <span className="sr-only">Voltar para a página inicial</span>
        </a>
      </Link>
    </header>
  )
}