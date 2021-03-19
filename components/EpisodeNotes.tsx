import type { EpisodeGuide } from 'types'
import parseTime from 'lib/parseTime'
import { useAudioContext } from 'lib/audioContext'

type AudioPlayerProps = {
  trackUrl: string
  guide: EpisodeGuide[]
}

export default function AudioPlayer({ trackUrl, guide }: AudioPlayerProps) {
  const { currentTrackUrl, skipTrack } = useAudioContext()

  return (
    <div className="w-full grid place-items-center gap-y-20 mt-24">
      <div className="w-read w-full px-10 py-8 rounded-xl border-0 bg-gray-100 dark:bg-gray-800">
        <h3>Anotações do Episódio</h3>

        <ul className="grid pt-4 auto-cols-max gap-y-2">
          {guide.map(({ title, timestamp, url }, index) => (
            <li key={index}>
              <button
                title={`Pular áudio para tópico: ${title}`}
                onClick={() => {
                  if (currentTrackUrl !== trackUrl) return
                  skipTrack(parseTime(timestamp))
                }}
              >
                [{timestamp}]
              </button>{' '}
              {Boolean(url) ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visitar link: ${title}`}
                >
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