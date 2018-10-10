import React from 'react'
import { Link } from 'gatsby'

const Footer = props => (
  <footer className="footer">
    <div className="footer-nav-container container">
      <div className="footer-nav row">
        <div className="footer-social three columns column">
          <ul className="footer-social-list">
            <li className="footer-social-item">
              <Link to="https://twitter.com/zofepod">
                <img
                  alt="Twitter logo"
                  src="/images/social-icons/twitter.svg"
                  className="footer-social-item-icon"
                />
              </Link>
            </li>
            <li className="footer-social-item">
              <Link to="https://facebook.com/zofepod">
                <img
                  alt="Facebook logo"
                  src="../../images/social-icons/facebook.svg"
                  className="footer-social-item-icon"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-feeds six columns column">
          <h6 className="footer-feeds-title">Feeds</h6>
          <ul className="footer-feeds-list">
            <li className="footer-feed-item">
              <a
                href="https://zofe.com.br/feed/podcast.xml"
                className="footer-feed-link"
                title="Podcast (AAC/M4A)"
              >
                Podcast (AAC/M4A)
              </a>
            </li>
            <li className="footer-feed-item">
              <a
                href="itpc://zofe.com.br/feed/podcast.xml"
                className="footer-feed-link"
                title="Podcast (iTunes)"
              >
                Podcast (iTunes)
              </a>
            </li>
            <li className="footer-feed-item">
              <a
                href="https://zofe.com.br/feed/posts.xml"
                className="footer-feed-link"
                title="Posts"
              >
                Posts
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-support three columns column" />
      </div>
    </div>
    <div className="footer-copyright-wrapper">
      <div className="footer-copyright-container container">
        <div className="row">
          <p className="footer-copyright twelve columns">
            © 2015 Zone of Front-enders
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
