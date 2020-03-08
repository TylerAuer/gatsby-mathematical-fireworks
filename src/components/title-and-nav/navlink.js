import React from "react"
import "./title-and-nav.css"

const NavLink = props => (
  <a href={props.url} className="px-2">
    {props.text}
  </a>
)

export default NavLink
