import Link from 'next/link'
import type { Episode } from 'types'

type EpisodeListProps = {
  episodes: Episode[]
}

const EpisodeLink = (episode: Episode) => {
  return (
    <li key={episode.slug} className="m-0 mr-10 mb-5">
      <Link href={`/episodio/${encodeURIComponent(episode.slug)}`}>
        <a>
          {episode.episodeNumber} - {episode.title}
        </a>
      </Link>
    </li>
  )
}

export default function EpisodeList(episodeList: EpisodeListProps) {
  const episodes = episodeList.episodes

  return (
    <div>
      <ul>{episodes.length > 0 && episodes.map(EpisodeLink)}</ul>
    </div>
  )
}
