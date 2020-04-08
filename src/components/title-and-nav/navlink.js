import React from "react"
import { css } from "@emotion/core"
// import "./title-and-nav.css"

const headerLinkStyle = css`
  font-family: "Fredoka One", sans-serif;
  font-size: 28px;
  color: rgba(255, 116, 81, 1);
  /* text-transform: uppercase; */
  &:hover {
    color: rgba(255, 0, 141, 1);
    text-decoration: none;
  }
`
const NavLink = props => (
  <a href={props.url} css={headerLinkStyle} className="px-2">
    {props.text}
  </a>
)

export default NavLink
