import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="row">
      <div id="header-title-div" className="col-12 text-center">
        <h1 id="header-title" className="display-4">
          Mathematical Playgrounds
        </h1>
      </div>
    </div>

    <div id="nav-links" className="mb-3">
      <nav className="nav d-flex justify-content-center">
        <a href="/" className="px-2">
          Home
        </a>
        <a href="/About" className="px-2">
          About
        </a>
        <a
          href="https://github.com/TylerAuer/gatsby-tutorials"
          className="px-2"
        >
          GitHub
        </a>
      </nav>
    </div>
  </header>
)

export default Header
