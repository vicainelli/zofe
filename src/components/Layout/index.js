import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import './styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="pt-br" />
        </Helmet>

        <div className="wrapper">
          <div className="meta">
            <Meta className="sidebarContent" />
          </div>

          <div id="main-content" className="main">
            {children}
          </div>
        </div>

        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
