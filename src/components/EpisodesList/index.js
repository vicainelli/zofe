import React from 'react'
import { Link } from 'gatsby'
import './styles.css'

const Episode = node => {
  const { slug, episodeNumber, title, publishDate } = node.node
  return (
    <li className="episode-item">
      <h3>
        <Link to={slug} className="episode-link">
          <span className="episode-number">{episodeNumber}</span>
          {title} em {publishDate}
        </Link>
      </h3>
    </li>
  )
}

const EpisodeList = props => (
  <div className="episodes container">
    {props.allContentfulEpisode.edges.map(episode => (
      <Episode key={episode.node.id} node={episode.node} />
    ))}
  </div>
)

export default EpisodeList
