/**
 * Imports head meta data (ex: Bootstrap and Google Analytics Scripts)
 * Wraps in a full-width container
 */

import React from "react"
import HeadMeta from "./headMeta"
import Header from "./title-and-nav/header"
import "./global.css"

// TODO: Add bootstrap JQuery scripts at end of body (I think that's just at the bottom of this render)
// TODO: Add fixed footer to the site
export default ({ children }) => (
  <>
    <HeadMeta />
    <Header />
    <div className="container-fluid">{children}</div>
  </>
)
