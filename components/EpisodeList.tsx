import type { Episode } from 'types'
import Link from 'next/link'

type EpisodeListProps = {
  episodes: Episode[]
}

const EpisodeLink = (episode: Episode) => {
  return (
    <li className="m-0 mr-10 mb-5">
      <Link href={`/episodio/${encodeURIComponent(episode.slug)}`}>
        <a>
          {episode.episodeNumber} - {episode.title}
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
