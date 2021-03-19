import { forwardRef } from 'react'
import { usePlayerContext } from 'lib/playerContext'

type AudioPlayerProps = {
  title: string
  url: string
}

const Player = forwardRef<HTMLAudioElement, AudioPlayerProps>(({ title, url }, ref ) => {
  const { isOpen } = usePlayerContext()

  return (
    <div className={`${isOpen ? 'translate-y-0' : '-translate-y-full' } p-4 z-30 fixed transform transition-all duration-300 ease-in-out overflow-hidden w-full grid place-items-center border-b-2 border-zofe bg-black bg-opacity-80 text-gray-100`}>
      {
        Boolean(url)
        ? (
          <>
            <strong
              className="text-xl pb-2"
            >
              {title}
            </strong>
            <audio
              ref={ref}
              src={url}
              controls
            >
              Seu browser não suporta <code>audio</code> element.
            </audio>
          </>
        )
        : (
          <span className="animate-pulse">Nenhum episódio selecionado.</span>
        )
      }
    </div>)
  }
)

export default Player