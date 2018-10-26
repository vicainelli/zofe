import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import EpisodeContent from '@components/EpisodeContent'
import Comments from '@components/Comments'
import './styles.css'

const Episode = props => {
  const {
    title,
    slug,
    postText,
    audioUrl,
    episodeGuide,
  } = props.data.contentfulEpisode

  return (
    <Layout>
      <article className="episode u-full-width">
        <header className="episode-header u-full-width">
          <h2 className="episode-title">
            <a
              href={slug}
              title={title}
              className="latest-post-title"
              rel="bookmark"
            >
              {title}
            </a>
          </h2>
        </header>

        {!!postText && (
          <div className="episode-content container">
            <div
              className="row"
              dangerouslySetInnerHTML={{
                __html: postText.childMarkdownRemark.html,
              }}
            />
          </div>
        )}

        <EpisodeContent audioUrl={audioUrl} content={episodeGuide} />

        <footer className="episode-meta container">
          <div className="row">
            <Comments slug={slug} />
          </div>
        </footer>
      </article>
    </Layout>
  )
}

Episode.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Episode

export const pageQuery = graphql`
  query episodeQuery($episodeNumber: Int!) {
    contentfulEpisode(episodeNumber: { eq: $episodeNumber }) {
      title
      slug
      audioUrl
      cover {
        description
        file {
          url
        }
      }
      postText {
        childMarkdownRemark {
          html
        }
      }
      episodeGuide {
        id
        title
        timestamp
        url
      }
    }
  }
`
