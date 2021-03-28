import type { Episode } from 'types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

type EpisodeListProps = {
  episodes: Episode[]
}

const EpisodeLink = (episode: Episode) => {
  const router = useRouter()
  const slug = router.query.slug as string
  const isCurrent = episode.slug === slug

  return (
    <li>
      <Link href={`/episodio/${encodeURIComponent(episode.slug)}`}>
        <a className={`flex
          w-full
          place-items-center
          overflow-hidden
          rounded-xl
          p-0
          mb-2
          transition-border
          duration-500
          ease-in-out
          bg-gradient-to-r
          dark:from-black
          dark:to-gray-900
          from-white
          to-gray-300
          border-4
          border-solid
          ${isCurrent ? 'border-zofe' : 'dark:border-gray-800 border-gray-100'}`}
        >
          <div className="relative w-20 h-20">
            <Image
              src={episode.cover.url}
              alt={`Capa do episódio ${episode.episodeNumber}`}
              layout='fixed'
              width={80}
              height={80} />
          </div>
          <div className="text-left px-4 font-light">
            {episode.title}
          </div>
        </a>
      </Link>
    </li>
  )
}

export default function EpisodeList({ episodes } : EpisodeListProps) {
  return (
    <ul>
      {episodes.length > 0 && episodes.map((episodeProps) => (
        <EpisodeLink key={episodeProps.slug} {...episodeProps} />
      ))}
    </ul>
  )
}
