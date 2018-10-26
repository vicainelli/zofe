import React from 'react'
import { Link } from 'gatsby'
import logo from '@images/zofe-logo.png'
import twitter from '@images/social-icons/twitter.svg'
import facebook from '@images/social-icons/facebook.svg'
import './styles.css'

const Header = ({ siteTitle }) => (
  <header className="main-header">
    <div className="header-content">
      <Link to="/" className="zofe-logo no-underline">
        <img src={logo} alt="ZOFE Logo - A yellow cube made of smaller cubes, written ZOFE in one face" />
      </Link>

      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="https://twitter.com/zofepod" className="social-icon no-underline">
              <img src={twitter} alt="ZOFE no Twitter" />
            </Link>
          </li>
          <li>
            <Link to="https://fb.com/zofepod" className="social-icon no-underline">
              <img src={facebook} alt="ZOFE no Facebook" />
            </Link>
          </li>
        </ul>

          <h5 className="footer-feeds-title">Feeds</h5>
          <ul className="footer-feeds-list">
            <li className="footer-feed-item">
              <a
                href="https://zofe.com.br/feed/podcast.xml"
                className="footer-feed-link"
                title="Podcast"
              >
                Podcast
              </a>
            </li>
            <li className="footer-feed-item">
              <a
                href="itpc://zofe.com.br/feed/podcast.xml"
                className="footer-feed-link"
                title="Apple Podcast"
              >
                Apple Podcast
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
      </nav>
    </div>
  </header>
)

export default Header
