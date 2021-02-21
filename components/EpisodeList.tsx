import Link from 'next/link'

const EpisodeLink = episode => {
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

export default function EpisodeList(episodeList) {
  const episodes = episodeList.episodes

  return (
    <div>
      <ul>{episodes.length > 0 && episodes.map(EpisodeLink)}</ul>
    </div>
  )
}
