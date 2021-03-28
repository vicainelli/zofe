import { forwardRef } from 'react'
import { usePlayerContext } from 'lib/playerContext'

type AudioPlayerProps = {
  title: string
  url: string
}

const Player = forwardRef<HTMLAudioElement, AudioPlayerProps>(({ title, url }, ref ) => {
  const { isOpen } = usePlayerContext()

  return (
    <div className={
      `${isOpen ? 'translate-y-0' : 'translate-y-full'}
      episodePlayer
      p-4
      z-30
      fixed
      -bottom-10
      transform
      transition-all
      duration-300
      ease-in-out
      overflow-hidden
      grid
      place-items-center
      border-t-2
      border-zofe
      bg-gray-300
      dark:bg-black
      rounded-xl
      text-gray-100`
    }>
      {
        Boolean(url)
        ? (
          <>
            <strong className="text-xl pb-2 text-red-800 dark:text-gray-200">
              {title}
            </strong>
            <audio
              ref={ref}
              src={url}
              className="w-full rounded-xl"
              controls
            >
              Seu browser não suporta <code>audio</code> element.
            </audio>
          </>
        )
        : (
          <span>Nenhum episódio selecionado.</span>
        )
      }
    </div>)
  }
)

export default Player
