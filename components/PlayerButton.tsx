import { FaHeadphones as Headphones } from 'react-icons/fa'
import { usePlayerContext } from 'lib/playerContext'

const OPEN_CLASSES = 'lg:bg-black lg:text-zofe text-black'
const CLOSED_CLASSES = 'lg:bg-zofe lg:text-black text-zofe'

export default function PlayerButton() {
  const {isOpen, toggleOpen } = usePlayerContext()

  return (
    <button onClick={() => { toggleOpen(!isOpen) }} className={`grid place-items-center ${isOpen ? OPEN_CLASSES : CLOSED_CLASSES} rounded-full w-16 h-16`}>
      <Headphones className="text-3xl" />
      <span className="sr-only">Mostrar/esconder tocador de áudio do episódio</span>
    </button>
  )
}