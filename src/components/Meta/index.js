import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="main-header">
    <div className="header-content">
      <Link to="/" className="zofe-logo ir">
        <h1>{siteTitle}</h1>
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
      </nav>
    </div>
  </header>
)

export default Header
