/**
 * Imports head meta data (ex: Bootstrap and Google Analytics Scripts)
 * Wraps in a full-width container
 */

import React from "react"
import HeadMeta from "./headMeta"
import Header from "./title-and-nav/header"
import "./global.css"
import { Table } from "react-bootstrap"

// TODO: Add fixed footer to the site
export default ({ children }) => (
  <>
    <HeadMeta />
    <Header />
    <div className="container-fluid">{children}</div>
  </>
)
