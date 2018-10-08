import React from 'react'
import { Link } from 'gatsby'

const Episode = node => {
  const { slug, title, publishDate } = node.node
  return (
    <article className="row">
      <header className="episode-header">
        <Link to={slug}>
          <h2>
            {title} em {publishDate}
          </h2>
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
