import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Episode = node => {
  const { slug, title } = node.node
  return (
    <li>
      <Link to={slug}>{title}</Link>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allContentfulEpisode.edges.map(episode => (
        <Episode key={episode.node.id} node={episode.node} />
      ))}
    </ul>
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
          slug
        }
      }
    }
  }
`
