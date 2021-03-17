import type { EpisodeGuide } from 'types'
import { useRef } from 'react'
import parseTime from 'lib/parseTime'

type AudioPlayerProps = {
  url: string
  guide: EpisodeGuide[]
}

export default function AudioPlayer({ url, guide }: AudioPlayerProps) {
  const ref = useRef<HTMLAudioElement | null>(null)

  const skip = (timeInSeconds: number) => {
    if (ref.current === null) return
    const { current: player } = ref

    player.currentTime = timeInSeconds
  }

  return (
    <div className="w-full grid place-items-center gap-y-20 mt-24">
      <audio
        ref={ref}
        controls
        src={url}>
          Seu browser não suporta <code>audio</code> element.
      </audio>
      <div className="w-read w-full px-10 py-8 rounded-xl border-0 bg-gray-100 dark:bg-gray-800">
        <h3>Anotações do Episódio</h3>

        <ul className="grid pt-4 auto-cols-max gap-y-2">
          {guide.map(({ title, timestamp, url }, index) => (
            <li key={index}>
              <button
                title={`Pular áudio para tópico: ${title}`}
                onClick={() => {
                  skip(parseTime(timestamp))
                }}
              >
                [{timestamp}]
              </button>{' '}
              {Boolean(url) ? (
                <a target="_blank" href={url} rel="noopener noreferrer" title={`Visitar link: ${title}`}>
                  {title}
                </a>
              ) : (
                <span>{title}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}