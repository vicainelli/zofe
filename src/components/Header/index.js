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

        <div id="search" className="search-box">
          <form id="search-form" action="/search" method="get">
            <input
              type="text"
              id="search-query"
              className="search-query"
              name="q"
              placeholder="Buscar"
            />
          </form>
        </div>
      </nav>
    </div>
  </header>
)

export default Header
