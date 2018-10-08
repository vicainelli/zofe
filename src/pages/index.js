import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/layout'
import EpisodesList from '@components/EpisodesList'

const IndexPage = ({ data }) => (
  <Layout>
    <EpisodesList {...data} />
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
