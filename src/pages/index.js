import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

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

const IndexPage = ({ data }) => (
  <Layout>
    <div className="episodes container">
      {data.allContentfulEpisode.edges.map(episode => (
        <Episode key={episode.node.id} node={episode.node} />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulEpisode(
      filter: { node_locale: { eq: "pt-BR" } }
      sort: { fields: [episodeNumber], order: DESC }
    ) {
      edges {
        node {
          id
          title
          publishDate(formatString: "DD/MM/YYYY", locale: "pt-BR")
          cover {
            file {
              url
            }
          }
          slug
        }
      }
    }
  }
`
