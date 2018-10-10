import React from 'react'
import { Link } from 'gatsby'
import './styles.css'

const Episode = node => {
  const { slug, title, publishDate } = node.node
  return (
    <article className="row episodeListWrapper">
      <header className="episode-header">
        <Link to={slug}>
          <h3>
            {title} em {publishDate}
          </h3>
        </Link>
      </header>
    </article>
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
