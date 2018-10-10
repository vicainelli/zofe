import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '@components/Header'
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
          <html lang="en" />
        </Helmet>

        <Header />

        <section id="search-results" className="search-results">
          <h2>Resultado da busca</h2>
          <div className="entries" />
        </section>

        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <div id="main-content" className="main-content">
          {children}
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
