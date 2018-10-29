import React from 'react'
import ZofeLink from '@components/ZofeLink'
import './styles.css'

const Episode = node => {
  const { slug, episodeNumber, title } = node.node
  return (
    <li className="episode-item">
      <h3>
        <ZofeLink to={`/${slug}`} className="episode-link">
          <span className="episode-number">{episodeNumber}</span>
          {title}
        </ZofeLink>
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
