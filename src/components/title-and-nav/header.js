import React from "react"
import NavLink from "./navlink"
import Title from "./title"

const Header = () => (
  <header>
    <div className="container-fluid">
      <Title text="Mathematical Playgrounds" />

      <div id="nav-links" className="mb-3">
        <nav className="nav d-flex justify-content-center">
          <NavLink url="/" text="Home" />
          <NavLink url="/about" text="About" />
          <NavLink
            url="https://github.com/TylerAuer/gatsby-mathematical-fireworks"
            text="GitHub"
          />
        </nav>
      </div>
    </div>
  </header>
)

export default Header
